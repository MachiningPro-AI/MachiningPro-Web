import type { Translations } from './en'

export const tr: Translations = {
  lang: 'tr',

  nav: {
    capabilities: 'Yetenekler',
    workflow: 'İş Akışı',
    industries: 'Sektörler',
    demo: 'Demo',
    collaborate: 'İş Birliği',
    contact: 'İletişim',
    launchDemo: 'Demoyu Aç',
  },

  hero: {
    badge: 'Mühendislik Önizlemesi · v0.5.0-demo',
    headline: 'Talaşlı İmalat ve Üretim Planlama için Mühendislik Zekâsı',
    subheadline: 'Teknik resimler, CAD verileri, işleme süreçleri, üretim planlama, kalite ve izlenebilirliği bir araya getiren mühendislik karar destek platformu.',
    ctaPrimary: 'Canlı Demoyu Aç',
    ctaSecondary: 'Yetenekleri İncele',
  },

  challenge: {
    sectionLabel: 'Mühendislik Zorluğu',
    title: 'Her İşlenmiş Parçanın Arkasındaki Karmaşıklık',
    subtitle: 'Modern talaşlı imalat; resim yorumlamadan proses yeterliliğine kadar düzinelerce mühendislik kararının entegrasyonunu gerektirir — çoğu zaman birbirinden bağımsız araçlarla manuel olarak yönetilir.',
    items: [
      {
        title: 'Bağlantısız Mühendislik Verileri',
        desc: 'CAD dosyaları, teknik resimler, proses notları ve takım katalogları aralarında yapısal bağ olmaksızın ayrı sistemlerde bulunur.',
      },
      {
        title: 'Manuel Tezgâh ve Takım Seçimi',
        desc: 'Her özellik için doğru tezgâh, kesici takım ve takım tutucu seçimi derin deneyim ve zaman alan manuel karşılaştırma gerektirir.',
      },
      {
        title: 'Kesme Parametrelerinin Karmaşıklığı',
        desc: 'Optimum kesme hızı, ilerleme ve talaş derinliğinin belirlenmesi; malzeme özellikleri, tezgâh kapasitesi ve takım ömrü dengelerini içerir.',
      },
      {
        title: 'GD&T Yorumlama',
        desc: 'Geometrik boyutlandırma ve tolerans gereksinimlerinin proses kısıtlarına ve muayene kriterlerine dönüştürülmesi uzman bilgisi gerektirir.',
      },
      {
        title: 'Proses Rotası Karşılaştırması',
        desc: 'Alternatif üretim rotalarının süre, maliyet, kapasite ve ekipman uygunluğu açısından değerlendirilmesi nadiren sistematik biçimde yapılır.',
      },
      {
        title: 'Çevrim Süresi ve Yeterlilik',
        desc: 'Üretim öncesinde gerçekleştirilebilir çevrim sürelerinin ve proses yeterliliğinin (Cp/Cpk) tahmin edilmesi yapılandırılmış mühendislik analizi gerektirir.',
      },
      {
        title: 'Üretim Planı Hazırlama',
        desc: 'Tutarlı ve izlenebilir üretim planları oluşturmak — operasyon sırası, kurulum, takımlar, parametreler — emek yoğun ve hataya açık bir süreçtir.',
      },
      {
        title: 'Muayene ve Kontrol Planlaması',
        desc: 'Resim gereksinimlerinin sistematik biçimde muayene planlarına ve kontrol çizelgelerine dönüştürülmesi yapılandırılmış süreçler gerektirir.',
      },
      {
        title: 'İzlenebilirlik',
        desc: 'Resim özelliğinden proses seçimine, parametre tercihinden kalite kaydına kadar tam izlenebilirliğin sağlanması süregelen bir zorluktur.',
      },
    ],
  },

  workflow: {
    sectionLabel: 'Mühendislik İş Akışı',
    title: 'Uçtan Uca Talaşlı İmalat Zekâsı',
    subtitle: 'MachiningPro AI, resimden izlenebilir üretim planına kadar tüm mühendislik sürecini yapılandırır.',
    steps: [
      { label: 'Resim / CAD', desc: 'Teknik resim, IGES, STEP, DXF aktarımı' },
      { label: 'Özellik Tanıma', desc: '3D özellik çıkarma ve sınıflandırma' },
      { label: 'GD&T Zekâsı', desc: 'Tolerans yorumlama ve kısıt eşleştirme' },
      { label: 'Tezgâh / Takım / Tutucu', desc: 'Doğrulanmış kütüphanelerden yapılandırılmış seçim' },
      { label: 'Kesme Parametreleri', desc: 'Mühendislik gerekçesiyle parametre belirleme' },
      { label: 'Proses Rotası', desc: 'Rota oluşturma ve optimizasyonu' },
      { label: 'Çevrim Süresi', desc: 'Yapılandırılmış çevrim süresi tahmini' },
      { label: 'Proses Yeterliliği', desc: 'Tolerans gereksinimlerine göre Cp/Cpk değerlendirmesi' },
      { label: 'Üretim Planı', desc: 'Tam operasyon çizelgeleri ve kurulum kayıtları' },
      { label: 'Muayene ve Kontrol Planı', desc: 'İzlenebilir muayene ve kontrol belgeleri' },
      { label: 'İzlenebilirlik / Dışa Aktarım', desc: 'Tam denetim izi ve yapılandırılmış dışa aktarım' },
    ],
  },

  capabilities: {
    sectionLabel: 'Platform Yetenekleri',
    title: 'Her Disiplinde Yapılandırılmış Mühendislik',
    subtitle: 'Tek bir karar destek platformunda birleşen yirmi mühendislik alanı.',
    items: [
      {
        title: 'CAD / IGES / STEP / DXF Analizi',
        desc: 'Geometri, özellikler ve meta veri çıkarmak için endüstri standardı CAD formatlarını aktarın ve analiz edin.',
      },
      {
        title: '3D Özellik Tanıma',
        desc: '3D katı geometriden talaşlı imalat özelliklerinin otomatik tespiti ve sınıflandırılması.',
      },
      {
        title: 'Resim Semantik Çıkarımı',
        desc: 'Teknik resimlerden boyut, tolerans, yüzey pürüzlülüğü ve notların yapılandırılmış çıkarımı.',
      },
      {
        title: 'GD&T Zekâsı',
        desc: 'Geometrik toleransların yorumlanması ve ölçülebilir proses kısıtlarına dönüştürülmesi.',
      },
      {
        title: 'Tezgâh Kütüphanesi',
        desc: 'Kapasite parametreleri, mil verileri ve uyumluluk özellikleriyle yapılandırılmış tezgâh kataloğu.',
      },
      {
        title: 'Kesici Takım Kütüphanesi',
        desc: 'Geometri, kalite, kaplama ve uygulama verilerini içeren kapsamlı takım veritabanı.',
      },
      {
        title: 'Takım Tutucu Kütüphanesi',
        desc: 'Mil arayüzü ve salgı spesifikasyonlarıyla doğrulanmış takım tutucu kataloğu.',
      },
      {
        title: 'Kesme Parametreleri',
        desc: 'Kesme hızı, ilerleme oranı, talaş derinliği ve takım ömrünü kapsayan mühendislik tabanlı parametre belirleme.',
      },
      {
        title: 'Uyumluluk Kontrolü',
        desc: 'Planlama öncesinde tezgâh–takım–tutucu–iş parçası uyumluluğunun sistematik doğrulaması.',
      },
      {
        title: 'Konfigürasyon Seçimi',
        desc: 'Belgelenmiş gerekçeyle optimal işleme konfigürasyonlarının rehberli seçimi.',
      },
      {
        title: 'Yüzey Pürüzlülüğü',
        desc: 'Resim yüzey pürüzlülüğü gereksinimlerine karşı Ra/Rz tahmini ve doğrulaması.',
      },
      {
        title: 'Takım Ömrü',
        desc: 'Taylor denklemi tabanlı takım ömrü tahmini ve değiştirme aralığı planlaması.',
      },
      {
        title: 'Proses Rotası Optimizasyonu',
        desc: 'Verimlilik ve kapasite için talaşlı imalat operasyonlarının yapılandırılmış değerlendirmesi ve sıralanması.',
      },
      {
        title: 'Çevrim Süresi Tahmini',
        desc: 'İlerleme, hız, yol ve kurulum paylarından deterministik çevrim süresi hesabı.',
      },
      {
        title: 'Proses Yeterliliği',
        desc: 'Tolerans gereksinimleri ve tezgâh kapasitesi verilerine göre Cp ve Cpk değerlendirmesi.',
      },
      {
        title: 'Üretim Planı',
        desc: 'Yapılandırılmış operasyon çizelgeleri, kurulum kayıtları ve proses belgeleri oluşturma.',
      },
      {
        title: 'Muayene Planı',
        desc: 'Doğrudan resim gereksinimlerinden türetilen özellik bazlı muayene planı.',
      },
      {
        title: 'Kontrol Planı',
        desc: 'Proses parametrelerini kalite özelliklerine bağlayan yapılandırılmış kontrol planları.',
      },
      {
        title: 'NC Program Mühendislik İncelemesi',
        desc: 'NC programlarının proses amacı ve parça gereksinimleri açısından mühendislik düzeyinde incelenmesi.',
      },
      {
        title: 'İzlenebilirlik / Dışa Aktarım',
        desc: 'Resim özelliğinden proses kararına kadar tam denetim izi ve yapılandırılmış formatlarda dışa aktarım.',
      },
    ],
  },

  demo: {
    sectionLabel: 'Platform Önizlemesi',
    title: 'Gerçek Mühendislik Demosu',
    subtitle: 'MachiningPro AI\'yi canlı uygulama üzerinden keşfedin — gerçek mühendislik iş akışlarını görün.',
    ctaLaunch: 'Canlı Uygulamayı Aç',
    note: 'Ekran görüntüleri platform mühendislik önizleme aşamasında ilerledikçe yayımlanacaktır.',
    screens: [
      'Kontrol Paneli',
      'CAD / IGES Aktarımı',
      '3D Parça Görünümü',
      'Özellik Ağacı',
      'GD&T Analizi',
      'Proses Rotaları',
      'Çevrim Süresi',
      'Üretim Planı',
      'Muayene Planı',
      'Kontrol Planı',
      'İzlenebilirlik Dışa Aktarımı',
    ],
  },

  intelligence: {
    sectionLabel: 'Mühendislik Zekâsı',
    title: 'AI Destekli + Deterministik Mühendislik',
    subtitle: 'MachiningPro AI, deterministik mühendislik mantığını AI destekli, açıklanabilir karar desteğiyle birleştirir.',
    description: 'MachiningPro AI\'deki her mühendislik kararı deterministik hesaplama ve doğrulanmış mühendislik bilgisine dayanır. AI; ilgili verileri öne çıkararak, karşılaştırmaları yapılandırarak ve belgelendirmeyi destekleyerek yardım eder — ancak mühendis her proses seçimi, parametre tercih ve onaylama sürecinde kontrolü elinde tutar.',
    principles: [
      {
        title: 'Mühendis Kontrolü Elinde Tutar',
        desc: 'Tüm proses seçimleri, parametre onayları ve üretim kararları mühendis tarafından alınır. MachiningPro AI yapılandırılmış bilgi ve karar desteği sağlar — hiçbir zaman otonom üretim onayı vermez.',
      },
      {
        title: 'Deterministik Mühendislik Çekirdeği',
        desc: 'Kesme parametresi hesaplamaları, çevrim süresi tahminleri, takım ömrü değerlendirmeleri ve yeterlilik endeksleri, yerleşik mühendislik denklemleri ve doğrulanmış ampirik veriler kullanılarak hesaplanır.',
      },
      {
        title: 'Açıklanabilir Karar Desteği',
        desc: 'Her öneri gerekçesini — veri kaynakları, hesaplama yöntemleri ve mühendislik kısıtları — ortaya koyar; mühendisler kararlarını inceleyebilir, sorgulayabilir ve belgeleyebilir.',
      },
      {
        title: 'Desteklenmeyen İddia Yok',
        desc: 'MachiningPro AI; otomatik üretim onayı, çarpışmasız CAM üretimi, otomatik imalat serbest bırakması veya kontrolsüz AI karar verme iddiasında bulunmamaktadır.',
      },
    ],
  },

  industries: {
    sectionLabel: 'Sektörler',
    title: 'Zorlu Mühendislik Ortamları için Tasarlandı',
    subtitle: 'MachiningPro AI; mühendislik titizliği, proses izlenebilirliği ve teknik belgelendirme standartlarının vazgeçilmez olduğu kuruluşlar için tasarlanmıştır.',
    items: [
      { title: 'Otomotiv OEM', desc: 'Yüksek hacimli, yüksek karmaşıklıklı güç aktarımı ve gövde parçaları için yapılandırılmış proses planlama ve izlenebilirlik.' },
      { title: 'Otomotiv Tier-1', desc: 'OEM teknik ve kalite gereksinimlerini karşılamak için tedarikçi tarafı mühendislik kapasitesi.' },
      { title: 'Savunma', desc: 'Düzenlenmiş, kritik öneme sahip bileşenler için izlenebilir üretim mühendisliği belgelendirmesi.' },
      { title: 'Havacılık', desc: 'Dar toleranslı, güvenlik açısından kritik işlenmiş parçalar için kapsamlı proses planlama desteği.' },
      { title: 'Genel Talaşlı İmalat', desc: 'Çeşitli parça tiplerini yöneten iş atölyeleri ve hassas taşeron işletmeler için yapılandırılmış karar desteği.' },
      { title: 'Demiryolu', desc: 'Güvenlik açısından kritik demir yolu araçları bileşenleri için mühendislik belgesi ve proses planlaması.' },
      { title: 'Endüstriyel Makine', desc: 'Karmaşık mekanik montajlar ve hassas bileşenler için üretim planlaması.' },
      { title: 'Hassas İmalat', desc: 'Sistematik kapasite değerlendirmesiyle dar toleranslı proses mühendisliği.' },
      { title: 'Takım ve Fikstür', desc: 'Özel takım ve fikstür üretimi için mühendislik belgesi ve proses planlaması.' },
    ],
  },

  value: {
    sectionLabel: 'İş Değeri',
    title: 'Uydurulmuş Rakamlar Olmadan Mühendislik Değeri',
    subtitle: 'MachiningPro AI; fabrikasyon istatistikler olmaksızın ölçülebilir mühendislik ve operasyonel iyileştirmeler sağlar.',
    items: [
      {
        title: 'Daha Hızlı Mühendislik Değerlendirmesi',
        desc: 'Yapılandırılmış iş akışları, mühendislerin üretim verisi toplama, karşılaştırma ve belgeleme için harcadığı süreyi azaltır.',
      },
      {
        title: 'Standardize Edilmiş Proses Planlaması',
        desc: 'Tutarlı planlama şablonları ve doğrulanmış kütüphaneler, gayri resmi, kişiye bağlı süreçlerin yerini alır.',
      },
      {
        title: 'Yapılandırılmış Seçim Kayıtları',
        desc: 'Tezgâh, takım ve proses seçimleri belgelenmiş gerekçeyle kaydedilir — kurum hafızası olmaktan çıkar.',
      },
      {
        title: 'Yeniden Kullanılabilir Üretim Bilgisi',
        desc: 'Proses kararları, parametre seçimleri ve doğrulanmış konfigürasyonlar yeniden kullanılabilir mühendislik varlıkları haline gelir.',
      },
      {
        title: 'Azaltılmış Manuel Karşılaştırma Çabası',
        desc: 'Uyumluluk kontrolleri, parametre aramaları ve rota karşılaştırmaları yapılandırılmış ve sistematiktir.',
      },
      {
        title: 'İyileştirilmiş Mühendislik İzlenebilirliği',
        desc: 'Resim gereksiniminden proses seçimine, kalite belgelendirmesine kadar tam denetim izi.',
      },
      {
        title: 'Daha Tutarlı Planlama',
        desc: 'Mühendislik kalitesi bireysel deneyim veya erişilebilirliğe göre değişmez.',
      },
      {
        title: 'Daha Güçlü Tedarikçi Değerlendirmesi',
        desc: 'Teknik kapasite değerlendirmeleri tedarikçi yeterlendirmesi için yapılandırılmış ve belgelenmiş biçimde yapılır.',
      },
    ],
  },

  architecture: {
    sectionLabel: 'Platform Mimarisi',
    title: 'Mühendislik Veri Mimarisi',
    subtitle: 'Resim aktarımından izlenebilir çıktıya kadar yapılandırılmış mühendislik veri hattı.',
    layers: [
      { label: 'CAD / Resim / NC Girişi', desc: 'IGES, STEP, DXF, PDF resim formatları' },
      { label: 'Mühendislik Veri Katmanı', desc: 'Özellik çıkarımı, GD&T ayrıştırma, resim semantiği' },
      { label: 'Deterministik Mühendislik Motorları', desc: 'Kesme parametreleri, çevrim süresi, takım ömrü, Cp/Cpk' },
      { label: 'AI Karar Desteği', desc: 'Açıklanabilir gerekçeyle yapılandırılmış öneriler' },
      { label: 'Proses Planlaması', desc: 'Operasyon çizelgeleri, kurulum kayıtları, rotalama' },
      { label: 'Kalite ve İzlenebilirlik', desc: 'Muayene planları, kontrol planları, denetim izi, dışa aktarım' },
    ],
  },

  demoCta: {
    sectionLabel: 'Canlı Uygulama',
    title: 'MachiningPro AI\'yi Deneyimleyin',
    subtitle: 'Mühendislik önizlemesi yayındadır. Platformu kendi verilerinizle keşfedin.',
    ctaPrimary: 'MachiningPro AI\'yi Başlat',
    ctaSecondary: 'Mühendislik Demosu Talep Et',
    maturity: 'Mühendislik Önizlemesi · v0.5.0-demo · Üretime Hazır Değil',
  },

  maturity: {
    sectionLabel: 'Ürün Olgunluğu',
    title: 'Mühendislik Önizleme Durumu',
    status: 'Mühendislik Önizlemesi',
    version: 'v0.5.0-demo',
    description: 'MachiningPro AI şu anda Mühendislik Önizleme aşamasındadır. Platform; teknik değerlendirme, müşteri demosu ve mühendislik pilot programları için uygundur. Bağımsız mühendislik incelemesi olmaksızın üretim serbest bırakma onayı, otomatik üretim yetkilendirmesi veya güvenlik açısından kritik kullanım için henüz doğrulanmamıştır.',
    labels: ['Mühendislik Önizlemesi', 'Müşteri Demosu', 'v0.5.0-demo'],
    notReady: ['Üretim Serbest Bırakma', 'Otomatik Üretim Onayı', 'İnceleme Olmaksızın Güvenlik Kritik Kullanım'],
  },

  collaborate: {
    sectionLabel: 'İş Birliği',
    title: 'Bizimle Çalışın',
    subtitle: 'MachiningPro AI; mühendislik kuruluşları, araştırma kurumları ve teknoloji ortaklarıyla iş birliği arıyor.',
    items: [
      {
        title: 'OEM Pilot',
        desc: 'Üretim planlama iş akışlarının gerçek dünyada doğrulanması için otomotiv veya endüstriyel OEM ile yapılandırılmış mühendislik pilotu.',
      },
      {
        title: 'Tier-1 Tedarikçi Pilotu',
        desc: 'MachiningPro AI\'yi tedarikçi mühendisliği ve teklif süreçlerine entegre etmek için Tier-1 tedarikçilerle iş birlikçi pilot.',
      },
      {
        title: 'Teknoloji Ortaklığı',
        desc: 'CAD, ERP, MES veya kalite yönetim sistemi sağlayıcılarıyla teknik entegrasyon.',
      },
      {
        title: 'Akademik / Araştırma',
        desc: 'Üretim, proses planlaması veya AI destekli mühendislik alanlarında üniversiteler ve mühendislik enstitüleriyle araştırma iş birliği.',
      },
      {
        title: 'Yatırımcı / Hızlandırıcı',
        desc: 'MachiningPro AI platformunun üretim pazarlarında ölçeklenmesi için yatırım ve hızlandırma fırsatları.',
      },
      {
        title: 'İş Geliştirme',
        desc: 'Kanal ortaklıkları, bayi düzenlemeleri ve coğrafi pazar geliştirme görüşmeleri.',
      },
    ],
  },

  contact: {
    sectionLabel: 'İletişim',
    title: 'Bize Ulaşın',
    subtitle: 'Mühendislik pilot sorguları, ortaklık görüşmeleri veya MachiningPro AI hakkındaki genel sorularınız için.',
    form: {
      name: 'Ad Soyad',
      org: 'Kuruluş',
      email: 'E-posta Adresi',
      subject: 'Konu',
      message: 'Mesaj',
      send: 'Sorgu Gönder',
      subjects: [
        'OEM Pilot Sorgusu',
        'Tier-1 Tedarikçi Pilotu',
        'Teknoloji Ortaklığı',
        'Akademik / Araştırma İş Birliği',
        'Yatırım / Hızlandırıcı',
        'İş Geliştirme',
        'Teknik Soru',
        'Diğer',
      ],
    },
    disclaimer: 'Gerçek mühendislik ve iş sorgularına yanıt vereceğiz. Bu form hiçbir kimlik bilgisi, API anahtarı veya dahili sistem bilgisi içermemektedir.',
  },

  footer: {
    tagline: 'Talaşlı İmalat ve Üretim Planlama için Mühendislik Zekâsı',
    links: {
      liveDemo: 'Canlı Demo',
      github: 'GitHub',
      disclaimer: 'Mühendislik Uyarısı',
      privacy: 'Gizlilik',
    },
    disclaimer: 'MachiningPro AI, Mühendislik Önizleme aşamasında (v0.5.0-demo) bir mühendislik karar destek platformudur. Bağımsız mühendislik incelemesi olmaksızın üretim serbest bırakma onayı veya güvenlik açısından kritik kullanım için doğrulanmamıştır. Tüm mühendislik kararları, platformu kullanan yetkili mühendisin sorumluluğundadır.',
    copyright: '© 2026 MachiningPro AI. Tüm hakları saklıdır.',
  },
}
