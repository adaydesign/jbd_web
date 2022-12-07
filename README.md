# Justice by Design

## Project Timeline

- 1-12-65 : start

## Setup Database

1. คัดลอกไฟล์ .env_bak เปลี่ยนชื่อไฟล์เป็น .env

```
cp .env_bak .env
```

2. แก้ไขชื่อ username และ password ในไฟล์ .env (ชื่อดาต้าเบสไม่ต้องเปลี่ยน ใช้เป็น db_jdb)

```
DATABASE_URL="mysql://[uname]:[ppass]@localhost:3306/db_jbd"
```

-- หมายเหตุ

-- สร้าง ฐานข้อมูล เพื่อติดตั้งลงเครื่องใหม่ (user จะต้องมีสิทธิ CREATE ALTER DROP REFERENCE ของทุกตาราง \*.\*) -- เพิ่ม INDEX ให้ในกรณี dev

```
GRANT CREATE, ALTER, DROP, REFERENCES,INDEX on *.* TO '__username__'@'localhost' WITH GRANT OPTION;
```

3. install packages

```
npm install
```

4. push database

```
npx prisma db push
```

5. generate client : Generate โค้ด model ไปยัง prisma client

```
npx prisma generate
```

6. ทดสอบการเรียกข้อมูลจากฐานข้อมูล (สำหรับ .ts) --> จะได้ผลลัพธ์ข้อมูลจากฐานข้อมูลออกมา

```
npx ts-node prisma/test.ts
```

## Deploy Production

1. ลบ catch ออกก่อน

```
rm -rf public/build
```

2. สร้าง catch ตั้งต้น

```
npm run dev
```

3. build และ start project ได้เลย

```
npm run build
PORT=8080 npm start
```
