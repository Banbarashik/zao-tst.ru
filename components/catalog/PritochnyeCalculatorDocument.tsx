import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import type {
  CalculatorState,
  WaterCalculatorState,
  SteamCalculatorState,
} from "@/types/pritochnye-calculator";

// ─── Регистрация шрифта ───────────────────────────────────────────────────────
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "/fonts/Roboto-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/fonts/Roboto-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

// ─── Константы документа ──────────────────────────────────────────────────────

const BORDER_GOLD = "#948A54";
const TEXT_BLACK = "#000000";
const FONT = "Roboto";

// A4: 595.28 × 841.89 pt; поля 36pt (≈0.5 дюйма, как 720 DXA в оригинале)
const MARGIN = 36;
const PAGE_W = 595.28;
const CONTENT_W = PAGE_W - MARGIN * 2; // 523.28

// Пропорции основной таблицы: 3917 / (3917+1309+3923+1307) = ~37.5% и ~12.5%
const COL_LABEL = CONTENT_W * 0.75 * 0.75; // ~пропорция широкой колонки
const COL_VALUE = CONTENT_W * 0.75 * 0.25; // ~пропорция узкой (значение)
// Итого две пары = CONTENT_W (с учётом погрешностей flexbox заполнит остаток)

// ─── Стили ────────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  page: {
    fontFamily: FONT,
    fontSize: 8, // 8pt ≈ 16 half-pts (основной текст шаблона)
    paddingTop: MARGIN,
    paddingBottom: MARGIN + 30, // + место под логотип футера
    paddingHorizontal: MARGIN,
    color: TEXT_BLACK,
    backgroundColor: "#FFFFFF",
  },

  // ── Шапка ──
  headerTable: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  headerLogo: {
    width: 50,
    height: 42,
    objectFit: "contain",
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 6,
  },
  headerBold: {
    fontSize: 11,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
  },
  headerNormal: {
    fontSize: 10,
    textAlign: "center",
    lineHeight: 1.3,
  },
  headerSmall: {
    fontSize: 8,
    textAlign: "center",
    lineHeight: 1.3,
  },

  // ── Мета-таблица (номер расчёта, дата, модель, рядность) ──
  metaTable: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
    marginBottom: 4,
  },
  metaCell: {
    width: "25%",
    paddingVertical: 3,
    paddingHorizontal: 4,
    fontSize: 10,
  },

  // ── Параграфы ──
  para: {
    fontSize: 8,
    marginBottom: 4,
    lineHeight: 1.4,
    textAlign: "justify",
  },

  spacer: { height: 6 },

  // ── Регуляторная таблица (2 колонки) ──
  reg2table: {
    marginBottom: 6,
  },
  reg2row: {
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: 10,
  },
  reg2left: {
    width: "50%",
  },
  reg2right: {
    width: "50%",
  },

  // ── Основная таблица данных ──
  dataTable: {
    borderWidth: 0.5,
    borderColor: BORDER_GOLD,
    marginBottom: 6,
  },
  dataHeaderRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: BORDER_GOLD,
  },
  dataHeaderCell: {
    width: "50%",
    textAlign: "center",
    paddingVertical: 4,
    paddingHorizontal: 4,
    fontSize: 10,
  },
  dataHeaderDivider: {
    borderLeftWidth: 0.5,
    borderLeftColor: BORDER_GOLD,
  },
  dataRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: BORDER_GOLD,
  },
  dataRowLast: {
    flexDirection: "row",
  },
  dataLabelCell: {
    width: "37.5%",
    paddingVertical: 3.5,
    paddingHorizontal: 4,
    fontSize: 8,
    borderRightWidth: 0.5,
    borderRightColor: BORDER_GOLD,
  },
  dataValueCell: {
    width: "12.5%",
    paddingVertical: 3.5,
    paddingHorizontal: 2,
    fontSize: 8,
    textAlign: "center",
    borderRightWidth: 0.5,
    borderRightColor: BORDER_GOLD,
    justifyContent: "center",
  },
  dataValueCellLast: {
    // правая колонка результата — без правой рамки
    width: "12.5%",
    paddingVertical: 3.5,
    paddingHorizontal: 2,
    fontSize: 8,
    textAlign: "center",
    justifyContent: "center",
  },

  // ── Футер ──
  footer: {
    position: "absolute",
    bottom: MARGIN,
    right: MARGIN,
  },
  footerLogo: {
    width: 76,
    height: 45,
    objectFit: "contain",
  },
});

// ─── Вспомогательные ─────────────────────────────────────────────────────────

function fmt(v: number | null | undefined, dec = 0): string {
  if (v == null || !isFinite(v)) return "—";
  return v.toFixed(dec);
}

function today(): string {
  return new Date().toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function calcNum(): string {
  // 5-значный случайный номер, как в шаблоне
  return String(Math.floor(Math.random() * 90000) + 10000);
}

function rowCount(rowKey: string): string {
  return rowKey === "2_rows" ? "2" : rowKey === "3_rows" ? "3" : "4";
}

const LOGO_HEADER = "/img/doc_header_logo.png";
const LOGO_FOOTER = "/img/doc_footer_logo.png";

// ─── Компонент одной строки таблицы данных ───────────────────────────────────

interface DataRowProps {
  leftLabel: string;
  leftValue: string;
  rightLabel: string;
  rightValue: string;
  isLast?: boolean;
}

function DataTableRow({
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
  isLast,
}: DataRowProps) {
  const rowStyle = isLast ? s.dataRowLast : s.dataRow;
  return (
    <View style={rowStyle}>
      <View style={s.dataLabelCell}>
        <Text>{leftLabel}</Text>
      </View>
      <View style={s.dataValueCell}>
        <Text>{leftValue}</Text>
      </View>
      <View style={s.dataLabelCell}>
        <Text>{rightLabel}</Text>
      </View>
      <View style={s.dataValueCellLast}>
        <Text>{rightValue}</Text>
      </View>
    </View>
  );
}

// ─── Водяной документ ─────────────────────────────────────────────────────────

function WaterContent({ state }: { state: WaterCalculatorState }) {
  const { inputs: i, results: r, modelLabel } = state;

  const coolantLabel =
    i.coolant === "water"
      ? "вода"
      : i.coolant === "ethyleneGlycol"
        ? "этиленгликоль"
        : "пропиленгликоль";

  return (
    <>
      {/* Описательный параграф */}
      <View style={s.spacer} />
      <Text style={s.para}>
        {"Приточный водяной калорифер "}
        <Text>{modelLabel} </Text>
        {
          "выпускается в двух, трех и четырех рядном исполнении. Номинальная производительность по воздуху варьируется в зависимости от рядности калорифера и параметров эксплуатации. Конструктивное исполнение воздухонагревателя адаптировано к циклическим температурным расширениям, гидравлическим и аэродинамическим нагрузкам и готово к интеграции в существующий контур без модернизации питающих сетей."
        }
      </Text>
      <View style={s.spacer} />

      {/* Регуляторная таблица */}
      <View style={s.reg2table}>
        {[
          ["Предприятие-производитель", "ООО «Т.С.Т.»"],
          ["Технические требования", "ТУ 4863-006-55613706-25"],
          ["Категория размещения", "ХЛ3 по ГОСТ 15150-69"],
          ["Теплоноситель", "горячая перегретая вода / гликолевые растворы"],
          ["Параметры теплоносителя", "T до 190°С, P до 1.2 МПа"],
          ["Качество теплоносителя", "ГОСТ 20995"],
          ["Параметры воздуха", "ГОСТ 12.1.005-88"],
          ["Монтаж и эксплуатация", "СНиП 41-01-2003"],
        ].map(([label, value]) => (
          <View key={label} style={s.reg2row}>
            <Text style={s.reg2left}>{label}</Text>
            <Text style={s.reg2right}>{value}</Text>
          </View>
        ))}
      </View>
      <View style={s.spacer} />

      {/* Дисклеймер */}
      <Text style={s.para}>
        {
          "Документ сформирован автоматизированной системой инженерных расчетов ООО «Т.С.Т.», на основе выбранной модели водяного калорифера "
        }
        <Text>{modelLabel} </Text>
        {
          "и индивидуальных параметров технологического процесса, введенных пользователем. Указанные в бланке параметры мощности, аэродинамического и гидравлического сопротивления являются взаимосвязанными физическими величинами. Корректировка габаритов теплообменника, площади сечения для прохода воздуха или замена материалов и конфигурации теплоотдающих элементов приведет к невыходу системы на проектную мощность и нарушению теплового баланса объекта."
        }
      </Text>
      <View style={s.spacer} />

      {/* Основная таблица */}
      <View style={s.dataTable}>
        {/* Заголовок */}
        <View style={s.dataHeaderRow}>
          <View style={s.dataHeaderCell}>
            <Text>ЗАПОЛНЕННЫЕ ДАННЫЕ</Text>
          </View>
          <View style={[s.dataHeaderCell, s.dataHeaderDivider]}>
            <Text>РЕЗУЛЬТАТЫ РАСЧЕТА</Text>
          </View>
        </View>

        {/* Строки */}
        <DataTableRow
          leftLabel={"ОБЪЕМ НАГРЕВАЕМОГО ВОЗДУХА, М\\u00B3/ЧАС"}
          leftValue={fmt(i.airVolume, 0)}
          rightLabel="ТЕПЛОВАЯ МОЩНОСТЬ, КВТ"
          rightValue={fmt(r?.thermalPower, 0)}
        />
        <DataTableRow
          leftLabel="ТЕМПЕРАТУРА ВХОДЯЩЕГО ВОЗДУХА, °С"
          leftValue={fmt(i.airInputT, 0)}
          rightLabel="АЭРОДИНАМИЧЕСКОЕ СОПРОТИВЛЕНИЕ, ПА"
          rightValue={fmt(r?.aerodynamicResistance, 0)}
        />
        <DataTableRow
          leftLabel="ТЕМПЕРАТУРА ВЫХОДЯЩЕГО ВОЗДУХА, °С"
          leftValue={fmt(i.airOutputT, 0)}
          rightLabel="ГИДРАВЛИЧЕСКОЕ СОПРОТИВЛЕНИЕ, ПА"
          rightValue={r ? fmt(r.hydraulicResistance * 1000, 0) : "—"}
        />
        <DataTableRow
          leftLabel="ТЕПЛОНОСИТЕЛЬ"
          leftValue={coolantLabel}
          rightLabel="РАСХОД ТЕПЛОНОСИТЕЛЯ, КГ/ЧАС"
          rightValue={fmt(r?.coolantFlowRate, 0)}
        />
        <DataTableRow
          leftLabel="КОНЦЕНТРАЦИЯ ГЛИКОЛЕЙ, %"
          leftValue={fmt(i.glycolConcentration, 0)}
          rightLabel={"МАССОВАЯ СКОРОСТЬ ВОЗДУХА, КГ/(М\\u00B2\\u2022С)"}
          rightValue={fmt(r?.airMassVelocity, 2)}
        />
        <DataTableRow
          leftLabel="ТЕМПЕРАТУРА ТЕПЛОНОСИТЕЛЯ НА ВХОДЕ, °С"
          leftValue={fmt(i.coolantInputT, 0)}
          rightLabel="СКОРОСТЬ ТЕПЛОНОСИТЕЛЯ, М/СЕК"
          rightValue={fmt(r?.coolantVelocity, 2)}
        />
        <DataTableRow
          leftLabel="ТЕМПЕРАТУРА ТЕПЛОНОСИТЕЛЯ НА ВЫХОДЕ, °С"
          leftValue={fmt(i.coolantOutputT, 0)}
          rightLabel="ЗАПАС ПОВЕРХНОСТИ НАГРЕВА, %"
          rightValue={fmt(r?.heatingAreaReserve, 0)}
          isLast
        />
      </View>
      <View style={s.spacer} />

      {/* Нижний параграф */}
      <Text style={s.para}>
        Расчетные данные можно использовать при подборе сопутствующего
        вентиляционного и насосно-смесительного оборудования. Чертеж
        предназначен для применения в проектах и подготовки присоединяемых к
        водяному калориферу элементов вентиляции. На чертеже указаны габаритные
        и присоединительные размеры водяного теплообменника, диаметр условного
        прохода патрубков. По запросу воздухонагреватели могут изготавливаться с
        фланцами, штуцерами с резьбовым соединением или с патрубками
        нестандартного диаметра, конфигурации и расположения.
      </Text>
    </>
  );
}

// ─── Паровой документ ─────────────────────────────────────────────────────────

function SteamContent({ state }: { state: SteamCalculatorState }) {
  const { inputs: i, results: r, modelLabel } = state;

  return (
    <>
      <View style={s.spacer} />
      <Text style={s.para}>
        {"Приточный паровой калорифер "}
        <Text>{modelLabel} </Text>
        {
          "выпускается в двух, трех и четырех рядном исполнении. Номинальная производительность по воздуху варьируется в зависимости от рядности калорифера и параметров эксплуатации. Конструктивное исполнение воздухонагревателя адаптировано к циклическим температурным расширениям, гидравлическим и аэродинамическим нагрузкам и готово к интеграции в существующий контур без модернизации питающих сетей."
        }
      </Text>
      <View style={s.spacer} />

      <View style={s.reg2table}>
        {[
          ["Предприятие-производитель", "ООО «Т.С.Т.»"],
          ["Технические требования", "ТУ 4863-006-55613706-25"],
          ["Категория размещения", "У3 по ГОСТ 15150-69"],
          ["Теплоноситель", "насыщенный / перегретый пар"],
          ["Параметры теплоносителя", "T до 190°С, P до 1.2 МПа"],
          ["Качество теплоносителя", "ГОСТ 20995 СНиП 2-04.07-86"],
          ["Параметры воздуха", "ГОСТ 12.1.005-88"],
          ["Монтаж и эксплуатация", "СНиП 41-01-2003"],
        ].map(([label, value]) => (
          <View key={label} style={s.reg2row}>
            <Text style={s.reg2left}>{label}</Text>
            <Text style={s.reg2right}>{value}</Text>
          </View>
        ))}
      </View>
      <View style={s.spacer} />

      <Text style={s.para}>
        {
          "Документ сформирован автоматизированной системой инженерных расчетов ООО «Т.С.Т.», на основе выбранной модели парового калорифера "
        }
        <Text>{modelLabel} </Text>
        {
          "и индивидуальных параметров технологического процесса, введенных пользователем. Указанные в бланке параметры мощности и аэродинамического сопротивления являются взаимосвязанными физическими величинами. Корректировка габаритов теплообменника, площади сечения для прохода воздуха или замена материалов и конфигурации теплоотдающих элементов приведет к невыходу системы на проектную мощность и нарушению теплового баланса объекта."
        }
      </Text>
      <View style={s.spacer} />

      {/* Основная таблица — 4 строки + 1 неполная для парового */}
      <View style={s.dataTable}>
        <View style={s.dataHeaderRow}>
          <View style={s.dataHeaderCell}>
            <Text>ЗАПОЛНЕННЫЕ ДАННЫЕ</Text>
          </View>
          <View style={[s.dataHeaderCell, s.dataHeaderDivider]}>
            <Text>РЕЗУЛЬТАТЫ РАСЧЕТА</Text>
          </View>
        </View>

        <DataTableRow
          leftLabel={"ОБЪЕМ НАГРЕВАЕМОГО ВОЗДУХА, М\\u00B3/ЧАС"}
          leftValue={fmt(i.airVolume, 0)}
          rightLabel="ТЕПЛОВАЯ МОЩНОСТЬ, КВТ"
          rightValue={fmt(r?.thermalPower, 0)}
        />
        <DataTableRow
          leftLabel="ТЕМПЕРАТУРА ВХОДЯЩЕГО ВОЗДУХА, °С"
          leftValue={fmt(i.airInputT, 0)}
          rightLabel="АЭРОДИНАМИЧЕСКОЕ СОПРОТИВЛЕНИЕ, ПА"
          rightValue={fmt(r?.aerodynamicResistance, 0)}
        />
        <DataTableRow
          leftLabel="ТЕМПЕРАТУРА ВЫХОДЯЩЕГО ВОЗДУХА, °С"
          leftValue={fmt(i.airOutputT, 0)}
          rightLabel="РАСХОД ТЕПЛОНОСИТЕЛЯ, КГ/ЧАС"
          rightValue={fmt(r?.steamConsumption, 0)}
        />
        <DataTableRow
          leftLabel="ДАВЛЕНИЕ СУХОГО НАСЫЩЕННОГО ПАРА, МПА"
          leftValue={i.steamPressure.replace(" МПа", "")}
          rightLabel={"МАССОВАЯ СКОРОСТЬ ВОЗДУХА, КГ/(М\\u00B2\\u2022С)"}
          rightValue={fmt(r?.airMassVelocity, 2)}
        />
        {/* Последняя строка — левая часть пустая */}
        <DataTableRow
          leftLabel=""
          leftValue=""
          rightLabel="ЗАПАС ПОВЕРХНОСТИ НАГРЕВА, %"
          rightValue={fmt(r?.heatingAreaReserve, 0)}
          isLast
        />
      </View>
      <View style={s.spacer} />

      <Text style={s.para}>
        Расчетные данные можно использовать при подборе сопутствующего
        вентиляционного и пароконденсатного оборудования. Чертеж предназначен
        для применения в проектах и подготовки присоединяемых к паровому
        калориферу элементов вентиляции. На чертеже указаны габаритные и
        присоединительные размеры парового теплообменника, диаметр условного
        прохода патрубков. По запросу воздухонагреватели могут изготавливаться с
        фланцами, штуцерами с резьбовым соединением или с патрубками
        нестандартного диаметра, конфигурации и расположения.
      </Text>
    </>
  );
}

// ─── Главный компонент документа ─────────────────────────────────────────────

interface HeaterCalculatorDocumentProps {
  state: CalculatorState;
}

export function PritochnyeCalculatorDocument({
  state,
}: HeaterCalculatorDocumentProps) {
  const docNum = calcNum();
  const rows = rowCount(state.inputs.rowCount);
  const label = state.modelLabel;

  return (
    <Document
      title={`Расчёт калорифера ${label}`}
      author="ООО «Т.С.Т.»"
      language="ru"
    >
      <Page size="A4" style={s.page}>
        {/* ── Шапка ── */}
        <View style={s.headerTable}>
          {/* Левый логотип */}
          <Image src={LOGO_HEADER} style={s.headerLogo} />

          {/* Центральный текст */}
          <View style={s.headerCenter}>
            <Text style={s.headerBold}>ООО «Т.С.Т.»</Text>
            <Text style={s.headerNormal}>
              Производство воздушно-отопительного оборудования
            </Text>
            <Text style={s.headerSmall}>
              +7 (961) 737-83-14{"   "}zao_tst@mail.ru{"   "}www.zao-tst.ru
            </Text>
            <Text style={s.headerSmall}>
              Кемеровская область, г. Киселевск, ул. Юргинская, 1
            </Text>
          </View>

          {/* Правый логотип */}
          <Image src={LOGO_HEADER} style={s.headerLogo} />
        </View>

        {/* ── Мета-строки (номер / дата / модель / рядность) ── */}
        <View style={s.metaTable}>
          <View style={s.metaCell}>
            <Text>Номер расчета</Text>
          </View>
          <View style={s.metaCell}>
            <Text>{docNum}</Text>
          </View>
          <View style={s.metaCell}>
            <Text>Дата расчета</Text>
          </View>
          <View style={s.metaCell}>
            <Text>{today()}</Text>
          </View>

          <View style={s.metaCell}>
            <Text>Модель калорифера</Text>
          </View>
          <View style={s.metaCell}>
            <Text>{label}</Text>
          </View>
          <View style={s.metaCell}>
            <Text>Кол-во рядов</Text>
          </View>
          <View style={s.metaCell}>
            <Text>{rows}</Text>
          </View>
        </View>

        {/* ── Тело ── */}
        {state.type === "water" ? (
          <WaterContent state={state} />
        ) : (
          <SteamContent state={state} />
        )}

        {/* ── Футер — логотип ООО ТСТ, выровнен вправо ── */}
        <View style={s.footer}>
          <Image src={LOGO_FOOTER} style={s.footerLogo} />
        </View>
      </Page>
    </Document>
  );
}
