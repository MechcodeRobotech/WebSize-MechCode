# MechCode Robotech – Next.js Landing Page

โปรเจกต์ Next.js + Tailwind พร้อมคอมโพเนนต์หน้า Landing ของ MechCode Robotech

## วิธีเริ่มต้น

```bash
# 1) แตกไฟล์และเข้าโฟลเดอร์
unzip mechcode-nextjs.zip
cd mechcode-nextjs

# 2) ติดตั้งแพ็กเกจ
npm install

# 3) รัน dev
npm run dev
# เปิด http://localhost:3000
```

## โครงสร้างไฟล์

```
app/
  layout.js
  page.jsx
  globals.css
components/
  MechCodeLanding.jsx
tailwind.config.js
postcss.config.js
next.config.js
package.json
```

### แก้ไขส่วนที่เป็นของจริง
- อัปเดตโลโก้/ชื่อแบรนด์และข้อมูลติดต่อในคอมโพเนนต์ `MechCodeLanding.jsx`
- เปลี่ยนภาพตัวอย่างผลงานเป็นรูปจริง (ตอนนี้เป็น placeholder)
- ถ้าต้องการฟอร์มทำงานจริง ให้ต่อ API (เช่น ส่งอีเมล, LINE Notify, Google Sheets)

### ดีพลอย
- แนะนำดีพลอยขึ้น **Vercel**
- หรือโฮสต์เองด้วย `npm run build` และ `npm start`