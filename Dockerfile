# ใช้ official Bun image เป็น base image
FROM oven/bun:1.1.6-alpine

# ตั้งค่า Working Directory ใน Container
WORKDIR /app

# คัดลอกไฟล์ package.json และ bun.lockb ก่อน เพื่อลด layer build
COPY package.json bun.lock ./

# ติดตั้ง dependencies ด้วย Bun
RUN bun install

# คัดลอกโค้ดทั้งหมดไปยัง container
COPY . .

# เปิดพอร์ตที่ Vite ใช้รัน (เริ่มต้นคือ 5173)
EXPOSE 5173

# รันเซิร์ฟเวอร์ Vite
CMD ["bun", "run", "dev", "--host"]
