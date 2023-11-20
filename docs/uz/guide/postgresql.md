## ArchLinuxga PostgreSQLni o'rnatishchun quyidagi ketma ketlikni bajaring:

Birinchi bo'lib Archlinuxni yangilash lozim:

```bash
sudo pacman -Syu
```

Postgresqlni o'rnatamiz:

```bash
sudo pacman -S postgresql
```

Root user sifatida login qilamiz:

```bash
sudo su
```

postgres user uchun parol o'rnatamiz:

```bash
passwd postgress
```

postgres uchun kerakli fayllar uchun ruxsat berish lozim:

```bash
chown -R postgres:postgres /var/lib/postgres
```

postgres useri bilan login qilamiz:

```bash
sudo -iu postgres
```

database intitilizatsiya qilamiz:

```bash
initdb --locale=C.UTF-8 --encoding=UTF8 -D /var/lib/postgres/data --data-checksums
```

Agarda sistema har yonganida postgres ishlashi kerak bolsa:

```bash
systemctl enable postgresql
```

va postgresni ishga tushiramiz:

```bash
systemctl start postgresql
```

va qarabsizki sizda PostgreSQL muvaffaqiyatli ishga tushdi


[Author](https://github.com/abdurakhman-uz)