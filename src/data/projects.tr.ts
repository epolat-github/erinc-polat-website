import { Project } from "@/types/project.type";

const projects: Project[] = [
    {
        slug: "fitnlit",
        title: "FitNLit - Fitness Yardımcınız",
        summary:
            "Size özel fitness yardımcınız! Antrenmanlarınızı görebilir, yemeklerinizi planlayabilir, kalori ve kişisel hedeflerinizi takip edebilir, vücudunuzun gelişimini süreç boyunca görselleştirebilirsiniz!",
        featuredImages: [
            {
                url: "/projects/fitnlit/fitnlit-multiple.webp",
                alt: "Project image",
            },
        ],
        tags: ["React Native", "IOS", "Android", "Özel Dizayn"],
        paragraphs: [
            "FitNLit ile ihtiyaçlarınıza göre hazırlanmış günlük yemek planlarının yanı sıra, fitness programlarını kolayca satın alabilir ve takip edebilirsiniz. Tariflere, doğru porsiyonlara ve makro besin değerlerine erişerek beslenmenizi zahmetsizce yönetebilirsiniz. İlerlemenizi takip etmek için motivasyonunuzu artıran bildirimlerle hedeflerinize odaklanabilirsiniz.",
            "Spor salonunda, antrenmanlarınızı, size rehberlik edecek videolar ve gerçek zamanlı sayaçlarla yapabilirsiniz. Fotoğraflar ve grafiklerle ilerlemenizi görsel olarak takip ederek zaman içinde ne kadar geliştiğinizi görmek daha kolay hale gelir. Bu uygulama, her adımda sizi desteklemek ve motive etmek için tasarlandı, böylece fitness hedeflerinize ulaşmanıza yardımcı olur.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/fitnlit/fitnlit-multiple.webp",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Workouts.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Workout Helper.webp",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/fitnlit/FitNLit Auth Multiple.webp",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Trackings.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Update Measurements.webp",
                        alt: "Project Image",
                    },
                ],
            },

            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Meal Detail.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Meal List.webp",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Goals.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Water Goal.webp",
                        alt: "Project Image",
                    },
                ],
            },
        ],
    },
    {
        slug: "actio",
        title: "Actio - Etkinlik Yönetimi",
        summary:
            "Cebinizdeki etkinlik arkadaşınızı keşfedin! Etkinliklere kolayca katılın, hatırlatıcılarla takipte kalın ve paylaşımlar ile anketlere katılarak etkinlik deneyiminizi kusursuz hale getirin!",
        projectUrl: "https://actioevents.com",
        featuredImages: [
            {
                url: "/projects/actio/Actio Multiple.webp",
                alt: "Project image",
            },
        ],
        tags: [
            "React Native",
            "IOS",
            "Android",
            "Çevrimdışı Desteği",
            "Push Notifikasyon",
            "QR Kod",
        ],
        paragraphs: [
            "Actio, kurumsal etkinlik anılarınızı profesyonelce yönetmek için tasarlanmış kapsamlı bir etkinlik yönetim sistemidir. Etkinlikleri takvim entegrasyonu, hatırlatıcılar ve bildirimlerle sorunsuz bir şekilde görüntülemenizi, kaydolmanızı ve katılmanızı sağlar.",
            "Kullanıcılar, etkinlik sırasında fotoğraf, belge ve bilgi içeren paylaşımlar yapabilir, etkinlik öncesi, sırasında ve sonrasında anketler ve bilgi formları ile etkileşime girebilir. Sistem, internet olmayan ortamlarda bile etkinlik girişlerini QR kod ile yapmanızı sağlar ve kullanıcıların favori organizatörlerini takip ederek gelecek etkinliklerden haberdar olmalarını sağlar.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/actio/Actio Multiple.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/actio/Actio Infograph.webp",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/actio/Actio Home.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/actio/Actio Event Details.webp",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/actio/Actio Onboarding 1.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/actio/Actio Notifications.webp",
                        alt: "Project Image",
                    },
                ],
            },
        ],
    },
    {
        slug: "quartiers",
        title: "Quartiers - Akıllı Tesis Yönetimi",
        summary:
            "Akıllı ev asistanınız! Cihazları zahmetsizce yönetin, enerji kullanımını takip edin ve hizmetleri daha bağlantılı bir yaşam deneyimi için kolaylaştırın!",
        featuredImages: [
            {
                url: "/projects/quartiers/Quartiers Multiple.webp",
                alt: "Project image",
            },
        ],
        tags: [
            "React Native",
            "IOS",
            "Android",
            "Özel Dizayn",
            "Akıllı Cihazlar",
            "Güvenlik ve Kilit",
        ],
        paragraphs: [
            "Quartiers, akıllı tesis yönetimi uygulaması, evinizi zahmetsizce yönetmenizi sağlar. Tesis yönetimine sorun bildirerek bilet açabilir veya fotoğraf yükleyebilir, akıllı ev cihazlarınızı senaryolar oluşturarak ve planlayarak kontrol edebilirsiniz. Ayrıca, bu senaryoları bağlı sensörler aracılığıyla tetikleyebilir, sorunsuz bir otomasyon sağlar.",
            "Aylık enerji kullanımınızı detaylı grafiklerle takip edebilir ve temizlikçi veya kuaför gibi hizmet sağlayıcıları uygulama üzerinden kiralayabilirsiniz. Akıllı kilitlerinizi yöneterek geçici veya kalıcı erişim verebilir ve tek bir platformdan birden fazla evi kolayca kontrol edebilirsiniz.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/quartiers/Quartiers Multiple.webp",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/quartiers/Quartiers Login.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/quartiers/Quartiers Home.webp",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/quartiers/Quartiers Home Control.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/quartiers/Quartiers Devices.webp",
                        alt: "Project Image",
                    },
                ],
            },
        ],
    },
    {
        slug: "construction-surveillance",
        title: "İnşaat Alanı Gözetim Sistemi",
        summary:
            "Dahua ve Instar kameraları ile OpenWeather verilerini kullanan, Almanya’daki inşaat alanları için geliştirilmiş bir gözetim sistemi. Thelen Holding’e bağlı SV Gebäudeautomation ve connect2 şirketleriyle ortak bir proje.",
        projectUrl: "https://surveillance.svg-solutions.com",
        featuredImages: [
            {
                url: "/projects/construction-surveillance/Surveillance Home.webp",
                alt: "Project image",
            },
        ],
        tags: ["React", "NodeJS", "MongoDB", "Dahua", "Instar"],
        paragraphs: [
            "Bu proje, Almanya’daki inşaat sahaları için Dahua ve Instar kameralarını OpenWeather verileriyle entegre eden bir gözetim sistemidir. Thelen Holding bünyesindeki SV Gebäudeautomation ve connect2 ile iş birliği içinde geliştirilen sistem, güvenliği ve operasyonel verimliliği artırır. Kullanıcılar, inşaat alanlarını sisteme ekleyerek beş günlük hava tahminlerini görüntüleyebilir ve çalışma koşullarını buna göre planlayabilirler.",
            "Sistem, günlük hava durumu verilerini kaydederek işçi koşullarının ve şantiye durumunun izlenmesine olanak tanır. Zaman çizelgesi özelliği, geçmiş kamera kayıtlarının görüntülenmesini ve indirilmesini sağlarken, konum bazlı hava durumu verileri Excel formatında dışa aktarılabilir. Ayrıca, gözetim kulelerinden gelen alarm bildirimlerinden oluşturulan biletler takip edilip indirilebilir, böylece güvenlik olaylarının düzgün şekilde belgelenmesi sağlanır.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/construction-surveillance/Surveillance Home.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/construction-surveillance/Surveillance Weather.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/construction-surveillance/Surveillance Timeline.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/construction-surveillance/Surveillance Alert Tickets.webp",
                    alt: "Project image",
                },
            },
        ],
    },
    {
        slug: "building-deficiency-management",
        title: "Bina Hata Yönetim Sistemi",
        summary:
            "EVVA’nın akıllı kilitlerini entegre eden, atanan görevlerin gerçek zamanlı takibini ve bakım personeli için kontrollü erişimi sağlayan bir bina sorun bildirim sistemi.",
        projectUrl: "https://accessportal.svg-solutions.com",
        featuredImages: [
            {
                url: "/projects/building-deficiency-management/Plan Radar Login.webp",
                alt: "Project image",
            },
        ],
        tags: [
            "React",
            "NodeJS",
            "MongoDB",
            "EVVA",
            "Plan Radar",
            "Akıllı Kilitler",
        ],
        paragraphs: [
            "Bu sistem, PlanRadar’ın bina sorun bildirim platformunu EVVA’nın akıllı kilitleriyle entegre ederek, sorunların ve atanan personelin gerçek zamanlı takibini sağlar. Erişim izinleri, özel kapı yapılandırmasına göre dinamik olarak verilir ve yalnızca yetkili teknisyenlerin belirlenen alanlara girişine izin verilir. Sorun çözüldüğünde erişim otomatik olarak iptal edilir.",
            "Teknisyenler, kapıları telefon veya RFID çipi kullanarak açabilir, bu da güvenliği ve verimliliği artırır. SV Gebäudeautomation, EVVA GmbH ve PlanRadar ile iş birliği içinde geliştirilen sistem, kullanım kredilerini yönetmek için Stripe destekli çevrimiçi ödeme entegrasyonuna sahiptir.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/Plan Radar Login.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/plan radar and evva websites.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/Plan Radar Superuser.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/Plan Radar Project Manager Cart.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/Plan Radar Project Manager Checkout.webp",
                    alt: "Project image",
                },
            },
        ],
    },
    {
        slug: "zeynep-dikdus-website",
        title: "Kişisel Web Sitesi - Terapist Zeynep Dikdüş",
        summary:
            "Psikoterapist Zeynep Dikdüş’ün kişisel web sitesi. Kendi çizimleri ve illüstrasyonlarıyla özel olarak tasarlandı.",
        projectUrl: "https://zeynepdikdus.com",
        featuredImages: [
            {
                url: "/projects/zeynep-dikdus-website/Zeynep Website Home.webp",
                alt: "Project image",
            },
        ],
        tags: ["NextJS", "Website", "Özel Tasarım"],
        paragraphs: [
            "Psikoterapist Zeynep Dikdüş’ün kişisel web sitesi. Kendi çizimleri ve illüstrasyonlarıyla özel olarak tasarlandı. Verilerin kolayca değiştirilip düzenlenebilmesi için küçük bir CMS sistemi ile destekleniyor.",
            "Next.js ile geliştirilen site, etkili SEO optimizasyonu sayesinde maksimum görünürlük sağlamak üzere tasarlandı.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Home.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website About.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Psychotherapy.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Gallery.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Contents.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Contact.webp",
                    alt: "Project image",
                },
            },
        ],
    },
    {
        slug: "atolye-ankara-website",
        title: "Kurumsal Web Sitesi - Atölye Ankara",
        summary:
            "Ankara Kalkınma Ajansı tarafından desteklenen “Atölye Ankara” projesi için geliştirilen CMS web sitesi. Bu proje, gençlerin istihdam edilebilirliğini artırmak amacıyla FabLab hizmetlerine ve ileri teknoloji eğitimine ücretsiz erişim sağlamaktadır.",
        featuredImages: [
            {
                url: "/projects/atolye-ankara/atolye-ankara-home.webp",
                alt: "Project image",
            },
        ],
        tags: ["Gatsby", "Strapi", "CMS Sistemi"],
        paragraphs: [
            "Ankara Kalkınma Ajansı tarafından desteklenen “Atölye Ankara” projesi, gençleri güçlendirmek için ileri teknoloji eğitimi sunarak ve FabLab hizmetlerine ücretsiz erişim sağlayarak inovasyonu teşvik etmeyi amaçlamaktadır. Bu girişim, Ankaralıların fikirlerini prototiplere dönüştürmesine olanak tanıyarak topluluk içinde yaratıcılığı ve inovasyonu desteklemektedir.",
            "Bu proje için Gatsby ve Strapi kullanarak web sitesini tasarlayıp geliştirdim ve kullanıcı dostu, kesintisiz bir deneyim sağladım. Bu teknolojiler sayesinde, kullanıcıların atölye taleplerinde bulunmasını ve çeşitli etkinliklere katılmasını kolaylaştıran dinamik bir platform oluşturdum.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/atolye-ankara/atolye-ankara-home.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/atolye-ankara/atolye-ankara-information.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/atolye-ankara/atolye-ankara-events.webp",
                    alt: "Project image",
                },
            },
        ],
    },
];

export default projects;
