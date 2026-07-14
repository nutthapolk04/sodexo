# POS Executive Dashboard — Sodexo Thailand

แดชบอร์ดผู้บริหารสำหรับระบบ POS หลายสาขา (ค้าปลีก / อาหาร / โรงพยาบาล / โรงงาน)
Executive dashboard for a multi-site POS system, built as a single streaming **Design Component**.

---

## 1. โครงสร้างไฟล์ / File structure

```
POS Executive Dashboard.dc.html   # ซอร์สโค้ดทั้งหมด (เทมเพลต + logic class)
support.js                        # runtime ของ Design Component (ไม่ต้องแก้)
_ds/schooney-v3-design-system-…/  # design system: tokens (สี/ฟอนต์/spacing) + components
README.md
```

ไฟล์ `.dc.html` = ซอร์สโค้ดอ่าน/แก้ได้ตรงๆ ไม่ได้ minify
- **ครึ่งบน** — เทมเพลต `<x-dc>` : มาร์กอัป UI ทั้งหมด (sidebar, filter bar, การ์ด, ตาราง, drawer)
- **ครึ่งล่าง** — `<script>` : `class Component extends DCLogic { … }` เป็น JavaScript ธรรมดา (mock data, logic, i18n, ธีม, กราฟ SVG)

---

## 2. วิธีรัน / Running locally

ต้องเสิร์ฟผ่าน static server เพราะไฟล์อ้างอิง `_ds/` และ `support.js` แบบ relative path
(เปิดไฟล์ตรงๆ ด้วย `file://` จะโหลด design system ไม่ครบ)

```bash
npx serve .
# หรือ
python3 -m http.server 8000
```

แล้วเปิด `http://localhost:8000/POS%20Executive%20Dashboard.dc.html`

---

## 3. หน้าจอ / Screens

| หน้า | ตอบโจทย์ |
|---|---|
| **Executive overview** | KPI (ยอดขาย / ธุรกรรม / ยอดเฉลี่ยต่อบิล / จำนวนชิ้น) + %MoM, กราฟแนวโน้มยอดขาย (วัน/เดือน/ปี), สัดส่วนช่องทางชำระเงิน (donut), อันดับสาขา, เปรียบเทียบช่วงเวลา, ความพึงพอใจลูกค้า |
| **Branch detail** | เลือกสาขาจากดรอปดาวน์ (มีค้นหา) → KPI สาขา, ความพึงพอใจ + การกระจายเรตติ้ง, อันดับแคชเชียร์, ยอดขายตามจุดขาย, บันทึกรายการขาย |
| **Reconciliation** | (มีในโค้ดแต่ถูกซ่อนจากเมนู) เทียบยอด POS กับบัญชี, badge สถานะ 🟢🟡🔴, drill-down รายการที่ผิดปกติ |

> เปิดเมนู Reconciliation กลับมา: แก้ `navDefs` ในคลาส `Component` ให้ใส่ `['reconciliation','Reconciliation','scale']` กลับเข้าไป

---

## 4. Global elements

- **Filter bar** (สาขา / ช่วงเวลา / ช่องทางชำระเงิน) sync ทุกหน้า — บนหน้า Branch detail ตัวกรองสาขาถูกซ่อน (ใช้ดรอปดาวน์ของหน้าแทน)
- **2 ภาษา** ไทย/อังกฤษ — ปุ่มลูกโลกที่ sidebar (`state.lang`, ดิกชันนารีในเมธอด `strings()`)
- **Light / Dark** — ปุ่มที่ sidebar (`state.theme`, พาเลตต์ในเมธอด `pal()`)
- **Responsive** — sidebar ยุบเป็นไอคอนเมื่อจอแคบ (อิง `state.vw`)

## 5. Tweaks (ปรับผ่าน editor ได้)
`brandName` · `defaultTheme` (light/dark) · `flagThresholdPct` (เกณฑ์ flag reconciliation — เปลี่ยนแล้วจำนวนสาขาที่ถูก flag ปรับตามทันที)

---

## 6. Mock data → ข้อมูลจริง / Wiring real data

mock data ทั้งหมดสร้างในเมธอด **`_build()`** (seeded RNG เพื่อให้ค่าคงที่) เก็บไว้ที่ `this._data.branches`
แต่ละสาขามี field:

```
{ id, name, region (Factory/Canteen/Hospital), monthly[], monthlyTx[],
  avgTicket, daily[], payments[], locs[], cashiers[], csat{score,dist,resp,prev},
  reconVar, pending }
```

จุดต่อ POS จริง:
1. แทน `_build()` ด้วยการ fetch จาก API แล้ว set `this._data` (โครงสร้างเดิม)
2. ช่องทางชำระเงินอยู่ที่ค่าคงที่ `CH` ใน `_build()` (Credit/Debit, Cash, PromptPay, Member, TrueMoney, Room Service, Mae Manee, Coupon)
3. Reconciliation: `reconOf()` คำนวณส่วนต่าง POS vs บัญชี — แทน `reconVar` ด้วยยอดบัญชีจริง
4. ความพึงพอใจ: field `csat` ต่อกับระบบรีวิว/แบบสอบถามจริง

Metric formatters: `baht()`, `bahtC()`, `num()`, `pctStr()` — สกุลเงิน ฿ (THB), เลข Western, วันที่ Gregorian

---

## 7. Design system

ทุกอย่างอิง **Schooney V3** tokens ผ่าน CSS variables (โหลดใน `<helmet>`)
- สีการเงินหลัก: navy `#275267`, teal `#279E82`; ทอง `#F6CF47` เป็น accent
- แดง/เหลือง สงวนไว้สำหรับ flag ความผิดปกติเท่านั้น
- ธีม override ผ่าน CSS variable `--app-*` บน element ราก (ดู `pal()`)
