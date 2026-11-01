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
    headline: 'CNC Talaşlı İmalat ve Üretim Planlama için Mühendislik Zekâsı',
    subheadline: 'Teknik resimler, CAD verileri, CNC talaşlı imalat prosesleri, kesme parametreleri, üretim planlama, kalite ve izlenebilirliği bir araya getiren mühendislik karar destek platformu.',
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
    subtitle: 'MachiningPro AI\'yi canlı uygulama üzerinden keşfedin — gerçek mühendislik iş akışlarını deneyimleyin.',
    ctaLaunch: 'Canlı Demoyu Başlat',
    videoTitle: 'Mühendislik Demosunu İzle',
    videoDesc: 'MachiningPro AI mühendislik iş akışını; CAD ve talaşlı imalat verilerinden özellik zekâsı, proses planlama, kalite ve izlenebilirliğe kadar inceleyin.',
    narrationNote: 'İngilizce anlatım · Türkçe altyazı mevcut',
    screenshotAlt: 'MachiningPro AI CAD ve 3D mühendislik çalışma alanı — özellik ağacı, 3D parça görünümü ve proses özellikleri paneli',
    screenshotLabel: '3D Özellik Görünümü ve Proses Planlaması',
    screenshotDesc: 'Özellik ağacı, parça geometrisi, tornalama operasyonu ve proses özellikleri panelini gösteren MachiningPro AI 3D çalışma alanı.',
    moreScreensNote: 'Kontrol paneli, GD&T analizi, üretim planı, muayene planı, kontrol planı ve izlenebilirlik dışa aktarımı gibi ek ekranlar canlı uygulamada mevcuttur.',
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
    title: 'Veriye Dayalı ve Ölçülebilir Mühendislik Değeri',
    subtitle: 'MachiningPro AI, doğrulanabilir mühendislik çıktıları, yapılandırılmış proses bilgisi ve izlenebilir karar desteğiyle operasyonel iyileştirmeyi destekler.',
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
    ctaSecondary: 'Mühendislik Demosunu İzle',
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

  machiningProcesses: {
    sectionLabel: 'CNC Talaşlı İmalat Prosesleri',
    title: 'İmalat Prosesi Mühendisliği',
    subtitle: 'MachiningPro AI, kaba tornalamadan hassas son işlemeye kadar tüm temel CNC talaşlı imalat operasyonlarında mühendislik bilgisini yapılandırır.',
    processes: [
      {
        id: 'turning',
        title: 'Tornalama',
        desc: 'İş parçasının döndürülerek sabit kesici uçla silindirsel talaş kaldırma işlemi. Kaba tornalama, finiş tornalama, alın tornalama, kesme ve profil tornalamasını kapsar.',
        params: ['Vc (m/dak)', 'f (mm/dev)', 'ap (mm)', 'Kesici uç geometrisi'],
      },
      {
        id: 'milling',
        title: 'Frezeleme',
        desc: 'Dönen çok kenarlı freze, sabit duran iş parçasından talaş kaldırır. Alın frezeleme, cep frezeleme, kontur frezeleme ve omuz frezelemeyi kapsar.',
        params: ['Vc (m/dak)', 'fz (mm/diş)', 'z (kenar sayısı)', 'ae (mm)', 'ap (mm)'],
      },
      {
        id: 'drilling',
        title: 'Delik Delme',
        desc: 'Dönen matkabın eksenel ilerlemeyle silindirik delik açması. Kör delik, düz delik, noktalama ve kademeli delmeyi kapsar.',
        params: ['Vc (m/dak)', 'f (mm/dev)', 'ap = D/2', 'Uç geometrisi'],
      },
      {
        id: 'boring',
        title: 'Boralama',
        desc: 'Mevcut bir deliğin hassas çap, yuvarlıklık ve yüzey kalitesine ulaşmak için tek noktalı kesiciyle büyütülmesi ve bitirilmesi.',
        params: ['Vc (m/dak)', 'f (mm/dev)', 'ap (mm)', 'Boralama çubuğu', 'IT toleransı'],
      },
      {
        id: 'threading',
        title: 'Diş Açma',
        desc: 'Tek noktalı diş açma takımı, kılavuz veya diş frezeleme ile helisel diş profillerinin oluşturulması. Dış ve iç diş açmayı kapsar.',
        params: ['Hatve (mm)', 'Diş formu', 'Vc (m/dak)', 'İlerleme stratejisi'],
      },
      {
        id: 'finishing',
        title: 'Hassas Son İşleme',
        desc: 'Sıkı boyutsal toleranslar ve gerekli Ra/Rz yüzey pürüzlülük değerlerine ulaşmak için yapılan son talaş kaldırma pasları.',
        params: ['Ra (µm)', 'Rz (µm)', 'rε burun yarıçapı', 'f (mm/dev)', 'ap (mm)'],
      },
    ],
  },

  machineTool: {
    sectionLabel: 'Tezgâh Zekâsı',
    title: 'Takım Tezgâhı Mühendisliği',
    subtitle: 'İş mili performansı, eksen konfigürasyonu, çalışma hacmi ve takım kapasitesini kapsayan yapılandırılmış tezgâh yetkinlik verileri.',
    machines: [
      {
        title: 'CNC Torna',
        config: 'C ekseni / Motorlu takım',
        specs: ['İş mili hız aralığı', 'İş mili gücü ve torku', 'Ayna çapı / Bar kapasitesi', 'Z ekseni hareketi', 'X ekseni hareketi', 'Punta'],
      },
      {
        title: '3 Eksenli İşleme Merkezi',
        config: 'X/Y/Z dikey',
        specs: ['İş mili hızı (maks.)', 'İş mili gücü / torku', 'Tabla boyutu (X × Y)', 'Z ekseni stroku', 'Takım magazini kapasitesi', 'ATC süresi'],
      },
      {
        title: '5 Eksenli İşleme Merkezi',
        config: 'X/Y/Z + A/B veya A/C',
        specs: ['Eş zamanlı 5 eksen', 'Eğim / döner aralık', 'İş mili hızı', 'Tabla çapı / kapasitesi', 'Hacimsel doğruluk', 'Takım magazini'],
      },
      {
        title: 'Yatay İşleme Merkezi',
        config: 'X/Y/Z + B ekseni palet',
        specs: ['Palet boyutu', 'İş mili hızı', 'İş mili gücü', 'X/Y/Z hareketi', 'B ekseni çözünürlüğü', 'APC (çift palet)'],
      },
      {
        title: 'Tornalama-Frezeleme Merkezi',
        config: 'C/Y ekseni + frezeleme mili',
        specs: ['Ana ve alt iş mili', 'Y ekseni hareketi', 'Frezeleme mili hızı', 'Bar kapasitesi', 'Motorlu takım istasyonları', 'B ekseni (opsiyonel)'],
      },
    ],
    disclaimer: 'Tezgâh kapasite parametreleri örnektir. Gerçek değerler belirli makine modellerine ve konfigürasyonlara bağlıdır.',
    disclaimerTr: 'Tezgâh kapasite parametreleri örnektir. Gerçek değerler belirli makine modellerine ve konfigürasyonlara bağlıdır.',
  },

  cuttingTool: {
    sectionLabel: 'Kesici Takım Mühendisliği',
    title: 'Kesici Takım Mühendisliği',
    subtitle: 'Yapılandırılmış kesici takım bilgisi — kesici uç geometrisi, takım tutucular, malzeme kaliteleri, kaplamalar ve uygulama parametreleri.',
    categories: [
      {
        title: 'Tornalama Kesici Ucu',
        desc: 'Tornalama operasyonları için endekslenebilir karbür uç. Temel parametreler: form (CNMG, DNMG, WNMG), boyut, burun yarıçapı rε, kesme kenarı açısı, kaplama.',
        attrs: ['ISO form kodu', 'Burun yarıçapı rε (mm)', 'Kalite / kaplama', 'Kesme kenarı açısı', 'Talaş kırıcı'],
      },
      {
        title: 'Tornalama Takım Tutucu',
        desc: 'Kesici ucu konumlandıran ve tezgâh revolver başına sıkıştıran dış takım tutucu. Kesme yönünü ve yaklaşma açısını belirler.',
        attrs: ['ISO tanımı', 'Gövde boyutu (h × b)', 'Uç sıkıştırma', 'Yaklaşma açısı κ', 'Yan açı λ'],
      },
      {
        title: 'Endekslenebilir Freze',
        desc: 'Endekslenebilir uçlu alın veya omuz freze. Birden fazla kesme kenarı, değiştirilebilir uçlar.',
        attrs: ['Çap D (mm)', 'Uç sayısı z', 'Kesici uç geometrisi', 'İş mili arayüzü', 'Maks. kesme derinliği ap'],
      },
      {
        title: 'Masif Karbür Parmak Freze',
        desc: 'Hassas frezeleme, profil ve cep işlemleri için masif karbür freze.',
        attrs: ['Çap D (mm)', 'Diş sayısı z', 'Sarım açısı', 'Köşe yarıçapı rε', 'Kaplama', 'Sap tipi'],
      },
      {
        title: 'Helisel Matkap',
        desc: 'Delik açma operasyonları için standart matkap. Uç geometrisi ve heliks tasarımı talaş tahliyesini belirler.',
        attrs: ['Çap D (mm)', 'Uç açısı', 'Heliks geometrisi', 'Kalite / kaplama', 'Tolerans sınıfı'],
      },
      {
        title: 'Boralama Çubuğu',
        desc: 'Hassas delik büyütme ve bitirme için tek noktalı iç boralama takımı.',
        attrs: ['Min. delik çapı', 'Maks. derinlik', 'Uç tipi', 'Titreşim sönümleme', 'Gövde arayüzü'],
      },
    ],
  },

  materialRemoval: {
    sectionLabel: 'Talaş Kaldırma Mekaniği',
    title: 'Talaş Kaldırma Mekaniği',
    subtitle: 'Deterministik mühendislik denklemleri, her talaşlı imalat operasyonunda kesme hızı, ilerleme hızı, devir sayısı ve talaş kaldırma oranını yönetir.',
    turningTitle: 'Tornalama Mekaniği',
    millingTitle: 'Frezeleme Mekaniği',
    formulas: [
      { label: 'Kesme Hızı (Tornalama)', eq: 'Vc = π × D × n / 1000', unit: 'm/dak', vars: 'D = çap [mm], n = devir sayısı [dev/dak]' },
      { label: 'Devir Sayısı', eq: 'n = 1000 × Vc / (π × D)', unit: 'dev/dak', vars: 'Vc = kesme hızı [m/dak], D = çap [mm]' },
      { label: 'İlerleme Hızı', eq: 'Vf = f × n', unit: 'mm/dak', vars: 'f = devir başına ilerleme [mm/dev], n = devir sayısı [dev/dak]' },
      { label: 'Frezeleme İlerleme Hızı', eq: 'Vf = fz × z × n', unit: 'mm/dak', vars: 'fz = diş başına ilerleme [mm/diş], z = diş sayısı, n = devir sayısı [dev/dak]' },
      { label: 'Talaş Kaldırma Oranı (Tornalama)', eq: 'Q = ap × f × Vc', unit: 'cm³/dak', vars: 'ap = kesme derinliği [mm], f = ilerleme [mm/dev], Vc = kesme hızı [m/dak]' },
    ],
    labels: {
      workpiece: 'İş Parçası',
      tool: 'Kesici Takım',
      edge: 'Kesici Kenar',
      chip: 'Talaş',
      vc: 'Kesme Hızı Vc',
      feed: 'İlerleme f',
      ap: 'Kesme Derinliği ap',
      force: 'Kesme Kuvveti',
      fz: 'Diş Başına İlerleme fz',
      z: 'Diş Sayısı z',
      ae: 'Kesme Genişliği ae',
    },
  },

  cuttingParamFlow: {
    sectionLabel: 'Kesme Parametresi Seçimi',
    title: 'Kesme Parametresi Zekâsı',
    subtitle: 'Malzeme ve operasyondan doğrulanmış kesme verilerine kadar yapılandırılmış parametre seçimi — tahmin değil, deterministik mühendislik.',
    steps: [
      { label: 'Malzeme', detail: 'İş parçası malzeme kalitesi, sertlik, işlenebilirlik' },
      { label: 'Operasyon', detail: 'Tornalama / Frezeleme / Delik Delme / Boralama / Diş Açma' },
      { label: 'Tezgâh Yetkinliği', detail: 'İş mili gücü, hız aralığı, rijitlik, kararlılık' },
      { label: 'Kesici Takım', detail: 'Uç kalitesi, geometri, kaplama, burun yarıçapı' },
      { label: 'Kesme Hızı Vc', detail: 'Vc [m/dak] — malzeme × takım kalitesi önerisi' },
      { label: 'Devir Sayısı n', detail: 'n = 1000 × Vc / (π × D) [dev/dak]' },
      { label: 'İlerleme f / fz', detail: 'Devir başına ilerleme [mm/dev] veya diş başına ilerleme [mm/diş]' },
      { label: 'İlerleme Hızı Vf', detail: 'Vf = f × n veya fz × z × n [mm/dak]' },
      { label: 'Derinlikler ap / ae', detail: 'Kesme derinliği [mm] ve kesme genişliği [mm]' },
      { label: 'Takım Ömrü Kontrolü', detail: 'Taylor denklemi — tahmini takım ömrü doğrulaması' },
      { label: 'Yüzey Pürüzlülüğü', detail: 'Ra = f² / (8 × rε) [µm] — finiş tahmini' },
      { label: 'Proses Yeterliliği', detail: 'Cp / Cpk değerlendirmesi — tolerans gereksinimlerine karşı' },
    ],
  },

  engineeringCharts: {
    sectionLabel: 'Mühendislik Analizi',
    title: 'Mühendislik İlişkileri',
    subtitle: 'Formüle dayalı mühendislik ilişkileri — ölçülmüş saha verisi değildir.',
    illustrativeNote: 'Illustrative engineering relationship',
    illustrativeNoteTr: 'Örnek mühendislik ilişkisi',
    charts: [
      {
        title: 'Devir Sayısı / İş Parçası Çapı',
        desc: 'n = 1000 × Vc / (π × D), sabit Vc\'de. Küçük çaplar, kesme hızını korumak için daha yüksek devir gerektirir.',
        xLabel: 'Çap D (mm)',
        yLabel: 'Devir Sayısı n (dev/dak)',
      },
      {
        title: 'İlerleme Hızı / Devir Sayısı',
        desc: 'Vf = f × n. İlerleme hızı, sabit devir başına ilemede devir sayısıyla doğrusal artar.',
        xLabel: 'Devir Sayısı n (dev/dak)',
        yLabel: 'İlerleme Hızı Vf (mm/dak)',
      },
      {
        title: 'Frezeleme İlerleme Hızı — Diş Sayısı Etkisi',
        desc: 'Vf = fz × z × n. Aynı fz ve n\'de diş sayısı z arttıkça ilerleme hızı orantılı artar.',
        xLabel: 'Devir Sayısı n (dev/dak)',
        yLabel: 'İlerleme Hızı Vf (mm/dak)',
      },
      {
        title: 'Kavramsal Takım Aşınma Gelişimi',
        desc: 'Kavramsal / normalize takım aşınma gelişimi — alıştırma, düzenli aşınma ve hızlanan aşınma fazları.',
        xLabel: 'İşleme Süresi',
        yLabel: 'Yan Yüz Aşınması VB',
      },
    ],
  },

  surfaceRoughness: {
    sectionLabel: 'Yüzey Kalitesi Mühendisliği',
    title: 'Yüzey Kalitesi Mühendisliği',
    subtitle: 'Yüzey kalitesi, kesme parametrelerinin, takım geometrisinin ve kesme koşullarının doğrudan bir mühendislik çıktısıdır.',
    formula: 'Ra ≈ f² / (8 × rε)',
    formulaDesc: 'Tornalama için teorik yüzey pürüzlülüğü formülü. Ra µm cinsinden, f = devir başına ilerleme [mm/dev], rε = burun yarıçapı [mm].',
    labels: {
      ra: 'Ra (aritmetik ortalama pürüzlülük)',
      rz: 'Rz (ortalama pürüzlülük derinliği)',
      feedMarks: 'İlerleme izleri',
      noseRadius: 'Takım burun yarıçapı rε',
      peakToValley: 'Tepe-vadi yüksekliği',
      direction: 'Yüzey yönü',
    },
    factors: [
      { title: 'İlerleme Hızı', desc: 'Devir başına ilerleme arttıkça yüzey pürüzlülüğü artar. Ra, f² ile orantılı artar.' },
      { title: 'Burun Yarıçapı rε', desc: 'Daha büyük burun yarıçapı teorik Ra\'yı düşürür. Aynı ilerleme hızında 0,8 mm yarıçap, 0,4 mm\'den daha iyi yüzey verir.' },
      { title: 'Takım Durumu', desc: 'Aşınmış kesme kenarı Ra değerlerini artırır. Tutarlı yüzey kalitesi için takım aşınma izlemesi şarttır.' },
      { title: 'Kesme Hızı', desc: 'Uygun kesme hızlarında birikmiş kenar oluşumu önlenir ve tutarlı yüzey kalitesi sağlanır.' },
      { title: 'Titreşim / Talaş Sıçraması', desc: 'Tezgâh ve iş parçası rijitliği, elde edilebilecek yüzey kalitesini doğrudan etkiler. Talaş sıçraması karakteristik düzenli izler oluşturur.' },
    ],
  },

  processRoute: {
    sectionLabel: 'Proses Güzergâhı Mühendisliği',
    title: 'Üretim Proses Güzergâhı',
    subtitle: 'Sentetik kademeli mil / valf mili için yapılandırılmış proses güzergâhı — uçtan uca üretim sırasını örnekler.',
    partName: 'Sentetik Kademeli Mil (Ticari olmayan)',
    operations: [
      { op: '00', name: 'Hammadde', detail: 'Ø60 × 180mm çubuk, C45 çeliği', icon: 'raw' },
      { op: '05', name: 'Kesme', detail: 'Boya ve paylara göre kesim', icon: 'saw' },
      { op: '10', name: 'CNC Kaba Tornalama', detail: 'Kaba tornalama, her iki alın, merkez delme', icon: 'turn' },
      { op: '20', name: 'CNC Finiş Tornalama', detail: 'Ø50 ±0,02, Ø40 ±0,02, pah, radüs finiş tornalama', icon: 'finish' },
      { op: '25', name: 'Kanal Açma', detail: 'Ø46 × 4mm segman kanalı', icon: 'groove' },
      { op: '30', name: 'Delik / İç Özellik İşleme', detail: 'Ø12 eksenel delik × 60mm derinlik', icon: 'drill' },
      { op: '40', name: 'Çapak Alma', detail: 'Tüm kenar ve çapraz deliklerin manuel çapak alınması', icon: 'deburr' },
      { op: '50', name: 'Muayene', detail: 'Resme göre boyutsal kontrol. Kritik özellikler için Cp/Cpk kaydı', icon: 'inspect' },
      { op: '55', name: 'Mühendislik Kaydı', detail: 'İzlenebilirlik kaydı: malzeme sertifikası, takım, parametreler, sonuçlar', icon: 'record' },
    ],
    synthetic: 'Yalnızca örnekleme amaçlı sentetik, ticari olmayan geometri.',
  },

  shopFloor: {
    sectionLabel: 'Mühendislikten Üretim Sahasına',
    title: 'Mühendislik Ofisinden Üretim Sahasına',
    subtitle: 'MachiningPro AI, teknik resimden işlenmiş ve muayene edilmiş parçaya kadar tam izlenebilirlik ile mühendislik bilgi zincirini yapılandırır.',
    steps: [
      { label: 'Teknik Resim', desc: 'Boyutlar, toleranslar, yüzey kalitesi ve GD&T içeren teknik resim' },
      { label: 'CAD Modeli', desc: 'IGES / STEP / DXF içe aktarma, geometri çıkarma, özellik tanıma' },
      { label: 'Tezgâh Seçimi', desc: 'Yapılandırılmış tezgâh yetkinliği değerlendirmesi ve seçimi' },
      { label: 'Kesici Takım', desc: 'Uyumluluk kontrolü ile uç, tutucu ve takım konfigürasyonu' },
      { label: 'Proses Planı', desc: 'Operasyon sırası, bağlama, kesme parametreleri, çevrim süresi' },
      { label: 'NC İnceleme', desc: 'NC programının proses niyetine göre mühendislik incelemesi' },
      { label: 'Talaşlı İmalat', desc: 'Onaylı proses verileriyle CNC operatörü tarafından tezgâh çalıştırma' },
      { label: 'Muayene', desc: 'Resim gereksinimlerine göre boyutsal ve yüzey pürüzlülüğü muayenesi' },
      { label: 'İzlenebilirlik', desc: 'Tam mühendislik kaydı: malzeme, tezgâh, takım, parametreler, sonuçlar' },
    ],
  },
}
