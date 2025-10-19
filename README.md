# 🗂️ Başvuru Takip Uygulaması (Application Tracker App)

ReactJS ile geliştirdiğim bu proje, kullanıcıların **iş veya proje başvurularını kolayca yönetip takip edebildiği** modern bir web uygulamasıdır.  
Kullanıcılar yeni başvurular ekleyebilir, mevcut başvurularını düzenleyebilir, durum takibi yapabilir ve notlar ekleyebilir.  

## 🚀 Özellikler
- 🧩 **Redux Toolkit** ile global state yönetimi  
- 🌐 **React Router** ile çoklu sayfa yapısı (Anasayfa, Yeni Başvuru, Detay)  
- ⚙️ **Axios + JSON Server** ile gerçekçi API entegrasyonu  
- 🕒 **Day.js** ile tarih düzenleme ve formatlama  
- 💬 **React Toastify** ile başarılı/başarısız işlem bildirimleri  
- 🎨 **Sass (SCSS)** ile modüler, esnek ve ölçeklenebilir tasarım  
- ⚡ **Vite** ile hızlı geliştirme ve derleme ortamı  
- ✨ **Lucide React** ikonlarıyla modern görünüm  

## 🧠 Öğrenilen Teknolojiler & Kazanımlar
Bu proje sayesinde:  
- Redux Toolkit kullanarak **state yönetimini merkezileştirmeyi** öğrendim  
- JSON Server ile **mock API oluşturma** ve **axios istekleri** yapma pratiği kazandım  
- SCSS kullanarak **component tabanlı stil yapısı** geliştirdim  
- React Router ile **SPA mantığını çoklu sayfaya genişletmeyi** uyguladım  
- Bildirim, tarih yönetimi ve veri akışı süreçlerinde **gerçek dünya senaryoları** çalıştım  

## 🛠️ Kullanılan Teknolojiler
| Teknoloji | Açıklama |
|------------|----------|
| ReactJS | UI oluşturmak için |
| Redux Toolkit | Global state yönetimi |
| React Router | Sayfa yönlendirme |
| Axios | API istekleri |
| JSON Server | Mock backend |
| Sass (SCSS) | Stil yönetimi |
| Vite | Geliştirme ortamı |
| React Toastify | Bildirim sistemi |
| Day.js | Tarih yönetimi |
| Lucide React | İkon seti |

## 🖼️ Ekran Görüntüleri

![EkranKayd2025-10-19205350-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/83fdefab-a628-459a-bb8c-1eedb815bf11)




## ⚙️ Kurulum
Projeyi kendi ortamında çalıştırmak için:

```bash
# Depoyu klonla
git clone https://github.com/bekirsglm/basvuru-takibi-app

# Proje dizinine gir
cd basvuru-takibi-app

# Bağımlılıkları yükle
npm install

# JSON Server’ı başlat (ayrı terminalde)
npx json-server --watch db.json --port 5000

# Geliştirme sunucusunu çalıştır
npm run dev
