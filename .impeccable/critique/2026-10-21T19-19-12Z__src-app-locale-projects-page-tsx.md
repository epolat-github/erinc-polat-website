---
target: Projeler sayfasını her açıdan ele al; ekleyebileceğimiz ne var?
total_score: 16
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 4
target_identity: "file:/Users/erincpolat/Desktop/projects/erinc-polat-website/src/app/[locale]/projects/page.tsx"
target_fingerprint: "sha256:d2bcb819dc438fdfcbfb75d5386b81a9095ef0d17a5ca1c8546a45ca7fdcb6ef"
target_path: /Users/erincpolat/Desktop/projects/erinc-polat-website/src/app/[locale]/projects/page.tsx
timestamp: 2026-10-21T19-19-12Z
slug: src-app-locale-projects-page-tsx
---
# Projeler sayfası değerlendirmesi

Tarih: 21 Ekim 2026. Hedef: src/app/[locale]/projects/page.tsx.
İki bağımsız değerlendirme: A tasarım ve içerik; B teknik denetim ve tarayıcı kanıtı. A tamamlanmadan B bulguları senteze alınmadı. Kaynak uygulama değiştirilmedi, Git işlemi yapılmadı.

## Ana değerlendirme

Sayfa sakin, güven veren, gerçek proje görsellerini öne çıkaran bir galeri. En büyük fırsat, ziyaretçinin benzer iş deneyimini ve Erinç'in katkısını hızlı değerlendirmesini sağlamak. Yedi projenin çeşitliliği ve mühendislik ayrıntıları mevcut sunumdan daha güçlü. Yeni efektlerden önce içerik bağlamı, doğru gezinme ve iletişim akışı iyileştirilmeli.

## Güçlü taraflar

- Büyük, contained proje görselleri, açık yüzeyler, boşluk ve tutarlı marka renkleri.
- Kart başına tek yerel dil uyumlu bağlantı; klavye odağı canlı kontrolde 3px lacivert outline gösterdi. İç içe CTA butonu yok.
- Server tarafında dil/veri seçimi; Next Image, sizes, lazy loading ve ayrılmış görsel oranı.
- Reduced-motion desteği; TR/EN aynı yedi slug ve sıralama; referans verilen görseller mevcut.
- Chrome görünüm emülasyonunda 320, 390, 600 ve 1512px genişliklerde yatay taşma görülmedi.

## Öncelikli bulgular

1. P1 Mobil menü yanlış hedefe gidiyor. Navbar/index.tsx:100 ve :339 üzerinden çıplak hash gönderiliyor. 390px görünümde Hakkımda tıklaması /tr/projects#about üretti; bu sayfada hedef yok. Ana sayfa bölümleri için locale-aware /#... kullanılmalı. Ayrı iletişim CTA'sı doğru hedefe sahip.
2. P1 Proje listesi ana sayfa metadatasını devralıyor. src/app/[locale]/layout.tsx:22 ve :40: genel İngilizce başlık/açıklama, canonical /, alternatifler /tr ve /en. Canlı TR/EN listesinde doğrulandı. Sayfaya özel yerelleştirilmiş başlık, açıklama, canonical ve /tr/projects ile /en/projects dil alternatifleri eklenmeli. Arama motorunun mevcut indeksleme durumu ölçülmedi.
3. P1 Kartlar geliştiricinin katkısından çok ürün kullanıcılarına hitap ediyor. projects/page.tsx:61 ve projects.tr.ts:7, :93, :160. Kategori, çözülen problem, doğrulanmış katkı ve ayırt edici yetenek gösterilmeli. Actio için çevrimdışı QR giriş, bina yönetimi için görev bazlı EVVA erişimi mevcut içerikte destekleniyor. Rol ve sonuç bilgileri ayrıca doğrulanmalı.
4. P1 Liste sonunda iletişime geçiş yok. projects/page.tsx:72 sonrasında liste bitiyor; masaüstü alt görünümde doğrulandı. Mevcut navbar iletişim yolu kullanılabilir. Kısa kapanış: Benzer bir ürün üzerinde mi çalışıyorsunuz? ve Projenizi konuşalım; mevcut yerelleştirilmiş ana sayfa iletişim bölümüne bağlanmalı. AnimatedTextLink veya InteractiveHoverButton yeniden kullanılmalı.
5. P2 İlk ekran uzmanlık çeşitliliğini eksik temsil ediyor. Veri sırası FitNLit, Actio, Quartiers ile başlıyor; ilk masaüstü ekranında iki mobil ürün var. Bir mobil ürün ve bir kurumsal entegrasyonla açılış veya anlaşılır kategori başlıkları önerilir. Bu bir editoryal öneridir; dönüşüm artışı ölçülmedi.
6. P2 Semantik yapı düzensiz. projects/page.tsx:20, :37, :45 ve MyWorkCard/index.tsx:147. Canlı DOM: main=0, h1=0; H2 sayfa adı, H6 açıklama, yedi H5 kart başlığı. Görsel stiller korunarak main, h1, p ve h2 yapısı kullanılmalı. Yalnızca H1 yokluğundan WCAG ihlali sonucu çıkarılmıyor.
7. P2 Mobil başlık kontrollerinin dokunma alanları küçük. 390px görünümde ana sayfa 75x25px, iletişim 117x36px, menü 42x42px; dil kontrolü kaynakta 30x30px. Projenin 44px hedefi doğrultusunda tıklama alanları genişletilmeli. Bu ölçümler tek başına WCAG AA ihlali kanıtı değildir.

## Eklenebilecekler

- Kısa, kapsamı anlatan giriş: mobil ürünler, kurumsal entegrasyonlar ve özel web siteleri. Yedi proje bilgisi veriden hesaplanabilir.
- Kartta anlaşılır proje türü ve ayırt edici bir yetenek. Gerekirse iki veya üç teknoloji etiketi; etiket duvarından kaçınılmalı. ChipRow uygun olduğunda yeniden kullanılabilir. Kart bağlantısı içine etkileşimli filtre konmamalı.
- Doğrulanmış rol ve kapsam alanları. Project modelinde role, year, scope veya outcomes yok. Değerler kullanıcıdan doğrulanmadan eklenmemeli.
- Bir mobil ve bir entegrasyon projesinde Problem / Benim katkım / Kritik karar / Sonuç yapısında gerçek vaka çalışması. Gerekirse basit mimari diyagram veya kısa ürün akışı. Mevcut detaylar açıklama ve galeriden oluştuğu için şimdiden Vaka çalışmasını okuyun sözü verilmemeli.
- Görev takibi ekranı gibi ürünü anlatan kapaklar: bina hata yönetiminde mevcut giriş ekranı yerine uygun yönetim ekranı değerlendirilmesi.
- İsteğe bağlı kategori seçimi: Tümü / Mobil / Web / Entegrasyon. Önce açık kategori modeli oluşturulmalı; tags teknoloji ve alan bilgisini karıştırıyor. Yedi kayıt için arama, sıralama ve sayfalama öncelikli ihtiyaç değil.
- Sayfaya özel sosyal paylaşım içeriği ve isteğe bağlı CollectionPage/ItemList yapılandırılmış verisi. Bunlar canonical düzeltmesinden sonra gelir.
- Var olan analitik altyapısında proje inceleme ve iletişim CTA etkileşimlerini ölçerek sonraki kararları desteklemek. Dönüşüm etkisi şu anda ölçülmedi.

Önerilen akış: kısa giriş → dengeli açılış projeleri → kategori/ayırt edici yetenek içeren kartlar → kısa iletişim kapanışı.

## Ziyaretçi deneyimi

Bilişsel yük düşük-orta. Her kartın tek eylemi ve görsel gruplama iyi; ilgili deneyimi anlamak için birden fazla projeyi açma gereği karşılaştırma yükü yaratıyor. Teknik olmayan müşteri ürün tanıtımından geliştirici uygunluğunu çıkarmak zorunda. Teknik iş ortağı entegrasyon/çevrimdışı destek gibi güçlü ayrıntıları listede kaçırabilir. Ekran okuyucu kullanan ziyaretçi düzensiz başlıklardan etkilenir; gerçek ekran okuyucu oturumu test edilmedi.

Duygusal akış: sakin ve yetkin ilk izlenim → benzer kart açıklamalarında tekrar → ilgili entegrasyonda güven → son karttan sonra belirsiz sonraki adım. Kapanış daveti son aşamayı tamamlayabilir.

## Heuristik değerlendirme

Bu puanlar kullanıcı araştırması değil, uzman değerlendirmesidir.

| Heuristik | Puan |
|---|---:|
| Konum/durum görünürlüğü | 3/4 |
| Gerçek dünya dili | 3/4 |
| Kontrol ve gezinme | 2/4 |
| Tutarlılık | 3/4 |
| Hata önleme | Uygulanmaz |
| Hatırlama yerine tanıma | 2/4 |
| İleri kullanım verimliliği | Uygulanmaz |
| Sade estetik | 3/4 |
| Hata kurtarma | Uygulanmaz |
| Yardım/dokümantasyon | Uygulanmaz |
| Toplam | 16/24 |

## Teknik değerlendirme

| Boyut | Puan |
|---|---:|
| Erişilebilirlik | 2/4 |
| Performans temelleri | 3/4 |
| Tema tutarlılığı | 4/4 |
| Duyarlı tasarım | 3/4 |
| Uygulama bütünlüğü | 2/4 |
| Toplam | 14/20 |

Detektör hedef dosya ve MyWorkCard için exit 0, [] döndürdü; kural bulgusu ve yanlış pozitif yok. Bu, manuel olarak doğrulanan gezinme/metaveri/semantik sorunlarının bulunmadığı veya tam uyumluluk olduğu anlamına gelmez.

Tarayıcı kanıtı Chrome masaüstü, TR 390px, EN 320px/600px görünüm emülasyonu, klavye odağı ve menü tıklamasını kapsar. Fiziksel cihaz, sentezlenmiş dokunma hareketleri, gerçek yüzde 200 zoom, ekran okuyucu ve tarayıcı reduced-motion emülasyonu test edilmedi. Core Web Vitals/LCP ölçülmedi. Read-only evaluate API nedeniyle overlay enjeksiyonu yapılmadı; kaynak taraması, ekran görüntüleri ve DOM/AX incelemesi kullanıldı. Yeni sunucu başlatılmadı; kullanıcının mevcut sunucusu çalışır bırakıldı ve viewport sıfırlandı.

## Sonraki kararlar

1. Açılış projelerinde mobil ürünler mi, kurumsal entegrasyonlar mı, dengeli bir seçki mi öne çıkmalı?
2. Sonraki kapsam: önce teknik hatalar; kartlar ve kapanış CTA; veya iki detaylı vaka çalışması?

Öncelik dışı: ek giriş animasyonları, yeni 3D gösteri, doğrulanmamış metrik/referanslar, yedi projeye arama ve sayfalama.
