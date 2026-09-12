

// MAARİF MODELİ GÜNCEL KONU LİSTESİ
const sinifKonulari = {
    5: [
        { id: "s5_sekil", ad: "1. Geometrik Şekiller" },
        { id: "s5_nicelik", ad: "2. Geometrik Nicelikler" }
    ],
    6: [
        { id: "s6_sekil", ad: "1. Geometrik Şekiller" },
        { id: "s6_nicelik", ad: "2. Geometrik Nicelikler" }
    ],
    7: [
        { id: "s7_nicelik", ad: "1. Geometrik Nicelikler" },
        { id: "s7_sekil", ad: "2. Geometrik Şekiller" }
    ],
    8: [
        { id: "s8_ucgenler", ad: "1. Üçgenler" },
        { id: "s8_eslik", ad: "2. Eşlik ve Benzerlik" },
        { id: "s8_cisimler", ad: "3. Geometrik Cisimler" },
        { id: "s8_donusum", ad: "4. Dönüşüm Geometrisi" }
    ]
};

const sinifRenkleri = {
    5: { border: "#2df888", text: "#a8ffb2" },
    6: { border: "#ffe17d", text: "#ffeb99" },
    7: { border: "#7d96ff", text: "#a3b7ff" },
    8: { border: "#ff8b7d", text: "#ffb3ab" }
};

let ogrenciSkoru = 0;
let toplamCozulen = 0;
let aktifSoruKey = "";
let aktifTip = "";
let aktifKonuId = "";

// --- DİNAMİK SIRALAMA DEĞİŞKENLERİ ---
let rastgeleSoruSirasi = [];
let guncelSoruIndeksi = 0;

// 5. Sınıf 1. Ünite Havuzu (Geometrik Şekiller)
const soruHavuzu_s5_sekil = {
    "s5_q1": {
        metin: "Soru 1/10 (Temel Seviye)\n\nKöşeleri ve kenarları olan, karşılıklı kenar uzunlukları birbirine eşit ve tüm iç açıları 90'ar derece olan dörtgen aşağıdakilerden hangisidir?",
        secenekler: { A: "Kare", B: "Dikdörtgen", C: "Yamuk", D: "Eşkenar Dörtgen" },
        dogruCevap: "B"
    },
    "s5_q1_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Karenin tüm kenarları eşittir. Karşılıklı kenarları eşit ve açıları 90° olan dikdörtgendir.<br>💡 <b>AI Önerisi:</b> Sitemizdeki <b>Örnek Sorular</b> bölümünden çözüp pratik yapabilirsin.</div>Soru 1 - Telafi\n\nTüm kenar uzunlukları eşit ve bütün iç açıları 90° olan dörtgen hangisidir?",
        secenekler: { A: "Kare", B: "Dikdörtgen", C: "Yamuk", D: "Paralelkenar" },
        dogruCevap: "A"
    },
    "s5_q2": {
        metin: "Soru 2/10 (Temel Seviye)\n\nBir üçgenin iç açılarının ölçüleri toplamı kaç derecedir?",
        secenekler: { A: "90°", B: "180°", C: "270°", D: "360°" },
        dogruCevap: "B"
    },
    "s5_q2_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Tüm üçgenlerin iç açılarının toplamı sabittir ve 180 derecedir.<br>💡 <b>AI Önerisi:</b> Sitemizdeki ders anlatım <b>Sunularını</b> inceleyebilirsin.</div>Soru 2 - Telafi\n\nÇeşitkenar bir üçgenin iç açılarının toplamı kaç derecedir?",
        secenekler: { A: "90°", B: "180°", C: "360°", D: "540°" },
        dogruCevap: "B"
    },
    "s5_q3": {
        metin: "Soru 3/10 (Orta Seviye)\n\nÖlçüsü 90 dereceden büyük, 180 dereceden küçük olan açılara ne ad verilir?",
        secenekler: { A: "Dar Açı", B: "Dik Açı", C: "Geniş Açı", D: "Doğru Açı" },
        dogruCevap: "C"
    },
    "s5_q3_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: 90° ile 180° arasındaki açılara geniş açı denir.<br>💡 <b>AI Önerisi:</b> Bu konuda yapay zeka <b>GeoAsistan</b>'ımıza danışmak ister misin?</div>Soru 3 - Telafi\n\nÖlçüsü tam olarak 90 derece olan açı hangisidir?",
        secenekler: { A: "Dar Açı", B: "Dik Açı", C: "Geniş Açı", D: "Doğru Açı" },
        dogruCevap: "B"
    },
    "s5_q4": {
        metin: "Soru 4/10 (Orta Seviye)\n\nBir açısının ölçüsü 90 derece olan üçgene ne ad verilir?",
        secenekler: { A: "Dar Açılı Üçgen", B: "Geniş Açılı Üçgen", C: "Dik Açılı Üçgen", D: "Eşkenar Üçgen" },
        dogruCevap: "C"
    },
    "s5_q4_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Bir açısı 90° olan üçgen dik açılı üçgendir.<br>💡 <b>AI Önerisi:</b> Sitemizdeki geometri <b>Oyunlarını</b> oynayarak pratik yapabilirsin.</div>Soru 4 - Telafi\n\nBütün iç açıları 90°'den küçük olan üçgenlere ne denir?",
        secenekler: { A: "Dar Açılı Üçgen", B: "Dik Açılı Üçgen", C: "Geniş Açılı Üçgen", D: "Çeşitkenar Üçgen" },
        dogruCevap: "A"
    },
    "s5_q5": {
        metin: "Soru 5/10 (Uygulama Seviyesi)\n\nBir ikizkenar üçgenin tepe açısı 50° ise, taban açılarından biri kaç derecedir?",
        secenekler: { A: "50°", B: "65°", C: "70°", D: "130°" },
        dogruCevap: "B"
    },
    "s5_q5_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: (180 - 50) / 2 = 65° hesaplanır.<br>💡 <b>AI Önerisi:</b> Biraz ara verip sitedeki <b>Eğlence</b> linkine göz atmaya ne dersin?</div>Soru 5 - Telafi\n\nİç açılarından ikisinin ölçüsü eşit olan üçgenlere ne denir?",
        secenekler: { A: "Eşkenar Üçgen", B: "İkizkenar Üçgen", C: "Çeşitkenar Üçgen", D: "Geniş Açılı Üçgen" },
        dogruCevap: "B"
    },
    "s5_q6": {
        metin: "Soru 6/10 (Uygulama Seviyesi)\n\nAşağıdaki dörtgenlerden hangisinin karşılıklı kenar çiftlerinden sadece biri paraleldir?",
        secenekler: { A: "Kare", B: "Dikdörtgen", C: "Yamuk", D: "Paralelkenar" },
        dogruCevap: "C"
    },
    "s5_q6_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Yalnızca bir çifti paralel olan dörtgen yamuktur.<br>💡 <b>AI Önerisi:</b> Sitemizdeki <b>Örnek Sorular</b> bölümünden çözüp pratik yapabilirsin.</div>Soru 6 - Telafi\n\nKarşılıklı kenar çiftlerinin ikisi de paralel olan dörtgen hangisidir?",
        secenekler: { A: "Yamuk", B: "Paralelkenar", C: "Üçgen", D: "Beşgen" },
        dogruCevap: "B"
    },
    "s5_q7": {
        metin: "Soru 7/10 (Analiz Seviyesi)\n\nBir beşgenin kaç tane köşesi vardır?",
        secenekler: { A: "3", B: "4", C: "5", D: "6" },
        dogruCevap: "C"
    },
    "s5_q7_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Beşgenin 5 kenarı ve 5 köşesi vardır.<br>💡 <b>AI Önerisi:</b> Sitemizdeki ders anlatım <b>Sunularını</b> inceleyebilirsin.</div>Soru 7 - Telafi\n\nÜçgenin kaç kenarı vardır?",
        secenekler: { A: "3", B: "4", C: "5", D: "6" },
        dogruCevap: "A"
    },
    "s5_q8": {
        metin: "Soru 8/10 (Analiz Seviyesi)\n\nTüm kenar uzunlukları eşit olan bir eşkenar üçgenin bir iç açısı kaç derecedir?",
        secenekler: { A: "45°", B: "60°", C: "90°", D: "120°" },
        dogruCevap: "B"
    },
    "s5_q8_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: 180 / 3 = 60° bulunur.<br>💡 <b>AI Önerisi:</b> Bu konuda yapay zeka <b>GeoAsistan</b>'ımıza danışmak ister misin?</div>Soru 8 - Telafi\n\nİç açılarının toplamı 180° olan ve üç kenarı da eşit olan üçgen hangisidir?",
        secenekler: { A: "İkizkenar Üçgen", B: "Çeşitkenar Üçgen", C: "Eşkenar Üçgen", D: "Dik Üçgen" },
        dogruCevap: "C"
    },
    "s5_q9": {
        metin: "Soru 9/10 (İleri Seviye)\n\nÖlçüleri toplamı 90 derece olan iki açıya ne ad verilir?",
        secenekler: { A: "Tümler Açılar", B: "Bütünler Açılar", C: "Komşu Açılar", D: "Ters Açılar" },
        dogruCevap: "A"
    },
    "s5_q9_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Toplamları 90° olanlar tümler, 180° olanlar bütünlerdir.<br>💡 <b>AI Önerisi:</b> Sitemizdeki geometri <b>Oyunlarını</b> oynayarak pratik yapabilirsin.</div>Soru 9 - Telafi\n\nÖlçüleri toplamı 180 derece olan iki açıya ne denir?",
        secenekler: { A: "Tümler Açılar", B: "Bütünler Açılar", C: "Dar Açılar", D: "Dik Açılar" },
        dogruCevap: "B"
    },
    "s5_q10": {
        metin: "Soru 10/10 (Uzman Seviye)\n\nBir dik üçgende dik açılardan biri 35° ise, diğer dar açının ölçüsü kaç derecedir?",
        secenekler: { A: "45°", B: "55°", C: "65°", D: "90°" },
        dogruCevap: "B"
    },
    "s5_q10_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Dik üçgende dar açıların toplamı 90 derecedir (90 - 35 = 55).<br>💡 <b>AI Önerisi:</b> Sitemizdeki geometri <b>Oyunlarını</b> oynayarak pratik yapabilirsin.</div>Soru 10 - Telafi\n\nBir dik üçgende dar açılardan biri 40° ise, diğer dar açı kaç derecedir?",
        secenekler: { A: "40°", B: "50°", C: "60°", D: "90°" },
        dogruCevap: "B"
    }
};

// 5. Sınıf 2. Ünite Havuzu (Geometrik Nicelikler)
const soruHavuzu_s5_nicelik = {
    "s5n_q1": {
        metin: "Soru 1/10 (Temel Seviye - Çevre)\n\nBir kenar uzunluğu 12 cm olan bir karenin çevre uzunluğu kaç santimetredir?",
        secenekler: { A: "24 cm", B: "36 cm", C: "48 cm", D: "144 cm" },
        dogruCevap: "C"
    },
    "s5n_q1_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Karenin 4 eşit kenarı vardır. Çevre bulmak için kenar 4 ile çarpılır (12 x 4 = 48).<br>💡 <b>AI Önerisi:</b> Sitemizdeki <b>Örnek Sorular</b> bölümünden çözüp pratik yapabilirsin.</div>Soru 1 - Telafi\n\nBir kenarı 8 cm olan karenin çevresi kaç cm'dir?",
        secenekler: { A: "16 cm", B: "24 cm", C: "32 cm", D: "64 cm" },
        dogruCevap: "C"
    },
    "s5n_q2": {
        metin: "Soru 2/10 (Temel Seviye - Alan)\n\nKısa kenarı 5 cm, uzun kenarı 10 cm olan bir dikdörtgenin alanı kaç cm²'dir?",
        secenekler: { A: "30 cm²", B: "50 cm²", C: "100 cm²", D: "15 cm²" },
        dogruCevap: "B"
    },
    "s5n_q2_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Dikdörtgenin alanı kısa kenar ile uzun kenarın çarpımıdır (5 x 10 = 50).<br>💡 <b>AI Önerisi:</b> Sitemizdeki ders anlatım <b>Sunularını</b> inceleyebilirsin.</div>Soru 2 - Telafi\n\nKısa kenarı 4 cm, uzun kenarı 7 cm olan dikdörtgenin alanı kaç cm²'dir?",
        secenekler: { A: "22 cm²", B: "28 cm²", C: "56 cm²", D: "11 cm²" },
        dogruCevap: "B"
    },
    "s5n_q3": {
        metin: "Soru 3/10 (Orta Seviye - Çevre)\n\nUzun kenarı 15 cm, kısa kenarı 8 cm olan bir dikdörtgenin çevre uzunluğu kaç cm'dir?",
        secenekler: { A: "23 cm", B: "46 cm", C: "60 cm", D: "120 cm" },
        dogruCevap: "B"
    },
    "s5n_q3_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Çevre için iki kenar toplanıp 2 ile çarpılır: (15 + 8) x 2 = 46 cm.<br>💡 <b>AI Önerisi:</b> Bu konuda yapay zeka <b>GeoAsistan</b>'ımıza danışmak ister misin?</div>Soru 3 - Telafi\n\nKısa kenarı 6 cm, uzun kenarı 10 cm olan dikdörtgenin çevresi kaçtır?",
        secenekler: { A: "32 cm", B: "16 cm", C: "60 cm", D: "30 cm" },
        dogruCevap: "A"
    },
    "s5n_q4": {
        metin: "Soru 4/10 (Orta Seviye - Alan)\n\nBir kenar uzunluğu 8 cm olan bir karenin alanı kaç cm²'dir?",
        secenekler: { A: "36 cm²", B: "48 cm²", C: "64 cm²", D: "81 cm²" },
        dogruCevap: "C"
    },
    "s5n_q4_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Karenin alanı iki kenarının birbiriyle çarpımıdır (8 x 8 = 64).<br>💡 <b>AI Önerisi:</b> Sitemizdeki geometri <b>Oyunlarını</b> oynayarak pratik yapabilirsin.</div>Soru 4 - Telafi\n\nBir kenarı 6 cm olan karenin alanı kaç cm²'dir?",
        secenekler: { A: "24 cm²", B: "36 cm²", C: "12 cm²", D: "48 cm²" },
        dogruCevap: "B"
    },
    "s5n_q5": {
        metin: "Soru 5/10 (Uygulama - Çevreden Kenar Bulma)\n\nÇevresi 40 cm olan bir karenin bir kenar uzunluğu kaç santimetredir?",
        secenekler: { A: "5 cm", B: "10 cm", C: "20 cm", D: "160 cm" },
        dogruCevap: "B"
    },
    "s5n_q5_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Çevreden kenar bulmak için toplam çevre 4'e bölünür (40 / 4 = 10).<br>💡 <b>AI Önerisi:</b> Biraz ara verip sitedeki <b>Eğlence</b> linkine göz atmaya ne dersin?</div>Soru 5 - Telafi\n\nÇevresi 28 cm olan karenin bir kenarı kaçtır?",
        secenekler: { A: "4 cm", B: "7 cm", C: "14 cm", D: "56 cm" },
        dogruCevap: "B"
    },
    "s5n_q6": {
        metin: "Soru 6/10 (Uygulama - Alandan Kenar Bulma)\n\nAlanı 36 cm² olan bir karenin bir kenar uzunluğu kaç santimetredir?",
        secenekler: { A: "4 cm", B: "6 cm", C: "9 cm", D: "18 cm" },
        dogruCevap: "B"
    },
    "s5n_q6_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Hangi sayının kendisiyle çarpımı 36'dır? 6 x 6 = 36 olduğu için kenar 6'dır.<br>💡 <b>AI Önerisi:</b> Sitemizdeki <b>Örnek Sorular</b> bölümünden çözüp pratik yapabilirsin.</div>Soru 6 - Telafi\n\nAlanı 49 cm² olan karenin bir kenarı kaç cm'dir?",
        secenekler: { A: "7 cm", B: "9 cm", C: "12 cm", D: "24 cm" },
        dogruCevap: "A"
    },
    "s5n_q7": {
        metin: "Soru 7/10 (Analiz - Dikdörtgen Kısa Kenar Bulma)\n\nAlanı 60 cm² ve uzun kenarı 10 cm olan bir dikdörtgenin kısa kenarı kaç santimetredir?",
        secenekler: { A: "4 cm", B: "5 cm", C: "6 cm", D: "50 cm" },
        dogruCevap: "C"
    },
    "s5n_q7_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Alan, uzun kenara bölünerek kısa kenar bulunur (60 / 10 = 6).<br>💡 <b>AI Önerisi:</b> Sitemizdeki ders anlatım <b>Sunularını</b> inceleyebilirsin.</div>Soru 7 - Telafi\n\nAlanı 40 cm² ve uzun kenarı 8 cm olan dikdörtgenin kısa kenarı kaçtır?",
        secenekler: { A: "4 cm", B: "5 cm", C: "8 cm", D: "10 cm" },
        dogruCevap: "B"
    },
    "s5n_q8": {
        metin: "Soru 8/10 (Analiz - Birim Kareler)\n\nBirim kareli kağıt üzerinde kapladığı yer 24 birim kare olan bir dikdörtgenin kenar uzunlukları aşağıdakilerden hangisi olamaz?",
        secenekler: { A: "3 br ve 8 br", B: "4 br ve 6 br", C: "5 br ve 5 br", D: "2 br ve 12 br" },
        dogruCevap: "C"
    },
    "s5n_q8_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: 5 x 5 = 25 birim kare yapar, yani 24 olamaz.<br>💡 <b>AI Önerisi:</b> Bu konuda yapay zeka <b>GeoAsistan</b>'ımıza danışmak ister misin?</div>Soru 8 - Telafi\n\nHangi iki sayının çarpımı 24 yapmaz?",
        secenekler: { A: "3 ve 8", B: "4 ve 6", C: "5 ve 5", D: "2 ve 12" },
        dogruCevap: "C"
    },
    "s5n_q9": {
        metin: "Soru 9/10 (İleri Seviye - Çevre Karşılaştırma)\n\nKısa kenarı 4 cm, uzun kenarı 10 cm olan dikdörtgen ile bir kenarı 6 cm olan karenin çevreleri arasındaki fark kaç cm'dir?",
        secenekler: { A: "2 cm", B: "4 cm", C: "6 cm", D: "8 cm" },
        dogruCevap: "B"
    },
    "s5n_q9_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Dikdörtgenin çevresi (10+4)x2 = 28 cm, karenin çevresi 6x4 = 24 cm'dir. Fark 28 - 24 = 4 cm'dir.<br>💡 <b>AI Önerisi:</b> Sitemizdeki geometri <b>Oyunlarını</b> oynayarak pratik yapabilirsin.</div>Soru 9 - Telafi\n\nÇevresi 24 cm olan bir karenin bir kenarı ile çevresi 28 cm olan dikdörtgenin uzun kenarını bulup karşılaştırabilirsin.",
        secenekler: { A: "Kare daha büyüktür", B: "Dikdörtgenin çevresi daha büyüktür", C: "Eşittir", D: "Hesaplanamaz" },
        dogruCevap: "B"
    },
    "s5n_q10": {
        metin: "Soru 10/10 (Uzman Seviye - Bileşik Alan)\n\nAlanları eşit olan iki şekilden birisi kenarları 9 cm ve 4 cm olan bir dikdörtgendir. Diğer şekil bir kare ise, bu karenin bir kenarı kaç cm'dir?",
        secenekler: { A: "4 cm", B: "6 cm", C: "9 cm", D: "36 cm" },
        dogruCevap: "B"
    },
    "s5n_q10_telafi": {
        metin: "<div style='background: linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%); color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 13px;'>🔍 ANALİZ: Dikdörtgenin alanı 9x4=36 cm²'dir. Karenin de alanı 36 ise bir kenarı 6 cm olmalıdır.<br>💡 <b>AI Önerisi:</b> Sitemizdeki geometri <b>Oyunlarını</b> oynayarak pratik yapabilirsin.</div>Soru 10 - Telafi\n\nAlanları eşit iki şekilden biri 8 cm ve 2 cm kenarlarına sahip dikdörtgendir. Diğeri kare ise, bu karenin bir kenarı kaç cm'dir?",
        secenekler: { A: "4 cm", B: "8 cm", C: "16 cm", D: "32 cm" },
        dogruCevap: "A"
    }
};

// Ana Simulator
function adaptifSimulatoruBaslat() {
    let displayPart = document.getElementById('display-part');
    if (!displayPart) return;

    displayPart.innerHTML = `
        <div style="background: linear-gradient(145deg, #0a3a40, #11998e); padding: 20px 25px; border-radius: 12px; color: white; width: 100%; height: 410px; box-sizing: border-box; box-shadow: 0px 5px 15px rgba(0,0,0,0.5); display: flex; flex-direction: column; justify-content: flex-start;">
            
            <div style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 8px; margin-bottom: 15px;">
                <span style="color: #ffffff; font-family: 'Arial Black', Arial, sans-serif; font-size: 15px; letter-spacing: 1px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">BİREYSEL YÖNLENDİRME MODÜLÜ</span>
                <div style="color: #a8ffb2; font-size: 12px; font-family: Arial, sans-serif; margin-top: 3px;">Geoweb AI Adaptif Analiz Motoru Devrede</div>
            </div>

            <div id="soruKutusu" style="flex-grow: 1; overflow-y: auto; padding-right: 5px;">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 5px 15px; align-items: center; justify-items: center;">
                    
                    <div onclick="sinifSec(5)" style="width: 100%; height: 120px; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.4); border: 2px solid #2df888;">
                        <span style="font-size: 22px;">📚</span>
                        <span style="color: white; font-family: 'Arial Black', Arial, sans-serif; font-size: 13px; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); margin-top: 4px;">5. SINIFLAR</span>
                    </div>

                    <div onclick="sinifSec(6)" style="width: 100%; height: 120px; background: linear-gradient(135deg, #f2994a 0%, #f2c94c 100%); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.4); border: 2px solid #ffe17d;">
                        <span style="font-size: 22px;">📐</span>
                        <span style="color: white; font-family: 'Arial Black', Arial, sans-serif; font-size: 13px; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); margin-top: 4px;">6. SINIFLAR</span>
                    </div>

                    <div onclick="sinifSec(7)" style="width: 100%; height: 120px; background: linear-gradient(135deg, #2b5876 0%, #4e4376 100%); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.4); border: 2px solid #7d96ff;">
                        <span style="font-size: 22px;">📊</span>
                        <span style="color: white; font-family: 'Arial Black', Arial, sans-serif; font-size: 13px; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); margin-top: 4px;">7. SINIFLAR</span>
                    </div>

                    <div onclick="sinifSec(8)" style="width: 100%; height: 120px; background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.4); border: 2px solid #ff8b7d;">
                        <span style="font-size: 22px;">🚀</span>
                        <span style="color: white; font-family: 'Arial Black', Arial, sans-serif; font-size: 13px; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); margin-top: 4px;">8. SINIFLAR</span>
                    </div>

                </div>
            </div>
        </div>
    `;
}

// Sınıf Konularını Listeleme (Açık ve Kilitli Modüller Mantığı)
function sinifSec(sinifDuzeyi) {
    let soruKutusu = document.getElementById("soruKutusu");
    if (!soruKutusu) return;

    let konular = sinifKonulari[sinifDuzeyi];
    let renk = sinifRenkleri[sinifDuzeyi];

    let html = `
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 0 15px;">
            <div style="text-align: center; margin-bottom: 8px;">
                <span style="color: #ffffff; font-family: 'Arial Black', Arial, sans-serif; font-size: 13px;">${sinifDuzeyi}. SINIF GEOMETRİ ÜNİTELERİ</span>
                <br><span style="color: ${renk.text}; font-size: 13px; cursor: pointer; text-decoration: underline;" onclick="adaptifSimulatoruBaslat()">⬅ Sınıf Seçimine Geri Dön</span>
            </div>
    `;

    konular.forEach(konu => {
        if (sinifDuzeyi === 5) {
            html += `
                <button onclick="konuSec('${konu.id}')" style="background: rgba(0, 0, 0, 0.4); color: white; border: 1px solid ${renk.border}; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: bold; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.3); transition: 0.2s;">
                    🔹 ${konu.ad}
                </button>
            `;
        } else {
            html += `
                <button onclick="alert('Bu modül şu an yapım aşamasındadır. TEKNOFEST prototipinde sadece 5. Sınıf konuları aktiftir.')" style="background: rgba(0, 0, 0, 0.6); color: #aaaaaa; border: 1px dashed #777777; padding: 10px 14px; border-radius: 6px; cursor: not-allowed; font-size: 13px; font-weight: bold; text-align: left; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);">
                    🔒 ${konu.ad} <span style="font-size: 10px; color: #ff8b7d; float: right; margin-top: 2px;">(Yakında)</span>
                </button>
            `;
        }
    });

    html += `</div>`;
    soruKutusu.innerHTML = html;
}

// 1) Firebase Giriş Kontrolü ve Yönlendirme (Maksimum 2 Deneme Mantığı)
function konuSec(konuId) {
    if (typeof firebase === 'undefined' || !firebase.auth().currentUser) {
        baslatTestHazirlik(konuId); // Sistemde giriş yapılmamışsa doğrudan başlat (prototip gösterimi için)
        return;
    }

    let user = firebase.auth().currentUser;
    let dbRef = firebase.firestore().collection("ogrenci_bilgileri").doc(user.email);

    dbRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            let denemeSayisi = (data.modul_denemeleri && data.modul_denemeleri[konuId]) ? data.modul_denemeleri[konuId] : 0;

            if (denemeSayisi >= 2) {
                alert("Bu modül için maksimum tekrar hakkınızı (2/2) doldurdunuz. Lütfen diğer modülleri deneyin!");
                return; // Öğrenci içeri alınmaz, haksız puan kazanımını önlüyoruz
            }
        }
        baslatTestHazirlik(konuId); 
    }).catch((error) => {
        console.error("Yetki kontrol hatası:", error);
        baslatTestHazirlik(konuId); 
    });
}

// 2) Soru Dizisini Hazırlama ve Karıştırma 
function baslatTestHazirlik(konuId) {
    ogrenciSkoru = 0;
    toplamCozulen = 0;
    guncelSoruIndeksi = 0;
    aktifKonuId = konuId; 

    let anaSorular = [];
    if (konuId === "s5_sekil") {
        aktifTip = "sekil";
        anaSorular = ["s5_q1", "s5_q2", "s5_q3", "s5_q4", "s5_q5", "s5_q6", "s5_q7", "s5_q8", "s5_q9", "s5_q10"];
    } else if (konuId === "s5_nicelik") {
        aktifTip = "nicelik";
        anaSorular = ["s5n_q1", "s5n_q2", "s5n_q3", "s5n_q4", "s5n_q5", "s5n_q6", "s5n_q7", "s5n_q8", "s5n_q9", "s5n_q10"];
    }

    for (let i = anaSorular.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [anaSorular[i], anaSorular[j]] = [anaSorular[j], anaSorular[i]];
    }
    
    rastgeleSoruSirasi = anaSorular;
    adaptifTestiBaslat(rastgeleSoruSirasi[0], aktifTip);
}

// Adaptif Soruyu Ekrana Yazdırmak için (Dinamik Soru Numarası)
function adaptifTestiBaslat(soruKey, tip) {
    aktifSoruKey = soruKey;
    aktifTip = tip;
    let aktifHavuz = (tip === "nicelik") ? soruHavuzu_s5_nicelik : soruHavuzu_s5_sekil;

    if (soruKey === "s5_bitis_karne") {
        yapayZekaKarnesiniGoster();
        return;
    }

    let soru = aktifHavuz[soruKey];
    let soruKutusu = document.getElementById("soruKutusu");
    if (!soruKutusu) return;

    let metin = soru.metin;
    if (!aktifSoruKey.includes("telafi")) {
        metin = metin.replace(/Soru \d+\/10/, `Soru ${guncelSoruIndeksi + 1}/10`);
    } else {
        metin = metin.replace(/Soru \d+ - Telafi/, `Soru ${guncelSoruIndeksi + 1} - Telafi`);
    }

    let seceneklerHtml = "";
    if (soru.secenekler && Object.keys(soru.secenekler).length > 0) {
        for (let [harf, secenekMetni] of Object.entries(soru.secenekler)) {
            seceneklerHtml += `
                <button onclick="cevapVer('${harf}')" style="background: rgba(255,255,255,0.9); color: #0a3a40; border: none; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: bold; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: 0.2s;">
                    <span style="color: #fc4a1a; font-weight: bold;">${harf})</span> ${secenekMetni}
                </button>
            `;
        }
    }

    soruKutusu.innerHTML = `
        <div style="padding: 0 10px; display: flex; flex-direction: column; gap: 6px;">
            <div style="font-size: 13px; color: #ffffff; white-space: pre-wrap; line-height: 1.4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                ${metin}
            </div>
            <div style="display: flex; flex-direction: column; gap: 5px; margin-top: 3px;">
                ${seceneklerHtml}
            </div>
        </div>
    `;
}

// Cevap Kontrolleri (Hata Önleyici/ Akış Kontrolü)
function cevapVer(secilenHarf) {
    let aktifHavuz = (aktifTip === "nicelik") ? soruHavuzu_s5_nicelik : soruHavuzu_s5_sekil;
    let soru = aktifHavuz[aktifSoruKey];

    toplamCozulen++;
    let sonrakiSoru = "";

    if (secilenHarf === soru.dogruCevap) {
        // DOĞRU BİLİNDİ
        if (!aktifSoruKey.includes("telafi")) {
            ogrenciSkoru++; 
        }
        
        guncelSoruIndeksi++; 
        if (guncelSoruIndeksi < rastgeleSoruSirasi.length) {
            sonrakiSoru = rastgeleSoruSirasi[guncelSoruIndeksi];
        } else {
            sonrakiSoru = "s5_bitis_karne";
        }
    } else {
        // YANLIŞ BİLİNDİ
        if (!aktifSoruKey.includes("telafi")) {
            // Ana soruda yanlış yapıldıysa, telafisine yollayolluyoruz
            let beklenenTelafiKey = aktifSoruKey + "_telafi";
            
            //  Eğer bir sebepten telafi sorusu yoksa sistemi kilitlenme
            if (aktifHavuz[beklenenTelafiKey]) {
                sonrakiSoru = beklenenTelafiKey;
            } else {
                guncelSoruIndeksi++;
                if (guncelSoruIndeksi < rastgeleSoruSirasi.length) {
                    sonrakiSoru = rastgeleSoruSirasi[guncelSoruIndeksi];
                } else {
                    sonrakiSoru = "s5_bitis_karne";
                }
            }
        } else {
            // Telafide de yanlışsa bir sonraki ana soruya geç
            guncelSoruIndeksi++;
            if (guncelSoruIndeksi < rastgeleSoruSirasi.length) {
                sonrakiSoru = rastgeleSoruSirasi[guncelSoruIndeksi];
            } else {
                sonrakiSoru = "s5_bitis_karne";
            }
        }
    }

    adaptifTestiBaslat(sonrakiSoru, aktifTip);
}

// 3) Firebase'de Puanı "Üstüne Yazan"  Veri İşleme
function profileVerileriIsle(modulAdi, dogruSayisi) {
    if (typeof firebase !== 'undefined' && firebase.auth().currentUser) {
        let user = firebase.auth().currentUser;
        let dbRef = firebase.firestore().collection("ogrenci_bilgileri").doc(user.email);

        let yeniPuan = dogruSayisi * 10;
        let yeniSeviye = dogruSayisi >= 8 ? "İleri" : (dogruSayisi >= 5 ? "Orta" : "Başlangıç");

        dbRef.get().then((doc) => {
            if (doc.exists) {
                let data = doc.data();
                
                let modulDenemeleri = data.modul_denemeleri || {};
                let modulPuanlari = data.modul_puanlari || {};
                let mevcutModuller = data.tamamlanan_moduller || [];

                let oncekiDenemeSayisi = modulDenemeleri[aktifKonuId] || 0;
                let yeniDenemeSayisi = oncekiDenemeSayisi + 1;

                // Eski puanı çıkarıp yeni puanı ekleyerek haksız kazancı önlüyoruz 
                let oncekiPuan = modulPuanlari[aktifKonuId] || 0;
                let mevcutToplamPuan = data.puan || 0;
                let guncelToplamPuan = mevcutToplamPuan - oncekiPuan + yeniPuan;

                let guncellemeVerisi = {
                    puan: guncelToplamPuan,
                    son_seviye: yeniSeviye,
                    [`modul_denemeleri.${aktifKonuId}`]: yeniDenemeSayisi,
                    [`modul_puanlari.${aktifKonuId}`]: yeniPuan
                };

                // Eğer bu modülü İLK KEZ çözüyorsa listeye ekle ve soru sayısını 10 artır
                if (yeniDenemeSayisi === 1) {
                    guncellemeVerisi.cozulen_soru_sayisi = firebase.firestore.FieldValue.increment(10);
                    if (!mevcutModuller.includes(modulAdi)) {
                        guncellemeVerisi.tamamlanan_moduller = firebase.firestore.FieldValue.arrayUnion(modulAdi);
                    }
                }

                dbRef.update(guncellemeVerisi).then(() => {
                    console.log("Firebase: Sınırlandırılmış veriler başarıyla güncellendi!");
                }).catch((error) => {
                    console.error("Firebase güncelleme hatası: ", error);
                });
            }
        }).catch((error) => {
            console.error("Öğrenci verisi çekilirken hata oluştu: ", error);
        });
    }
}

function yapayZekaKarnesiniGoster() {
    let bitenModul = (aktifTip === "nicelik") ? "5. Sınıf Geometrik Nicelikler" : "5. Sınıf Geometrik Şekiller";
    profileVerileriIsle(bitenModul, ogrenciSkoru);

    let soruKutusu = document.getElementById("soruKutusu");
    if (!soruKutusu) return;

    let basariYuzdesi = Math.round((ogrenciSkoru / 10) * 100);
    let durumMesaji = "";
    let onerilenModulBtn = "";

    if (basariYuzdesi >= 80) {
        durumMesaji = "Mükemmel! Geometri kavramlarını çok iyi kavradın. Pratik yaparak bu başarını pekiştirebilirsin.";
        onerilenModulBtn = `
            <button onclick="goruntule('4')" style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; border: 1px solid white; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: bold; width: 100%;">✏️ Sitemizdeki Örnek Sorulardan Çöz</button>
            <button onclick="goruntule('5')" style="background: linear-gradient(135deg, #2b5876 0%, #4e4376 100%); color: white; border: 1px solid white; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: bold; width: 100%;">🎮 Geometri Oyunlarımızı Oyna</button>
        `;
    } else if (basariYuzdesi >= 50) {
        durumMesaji = "İyi iş çıkardın! Ancak formülleri ve konuları biraz daha incelemeye ihtiyacın var.";
        onerilenModulBtn = `
            <button onclick="goruntule('7')" style="background: linear-gradient(135deg, #f2994a 0%, #f2c94c 100%); color: white; border: 1px solid white; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: bold; width: 100%;">🖥️ Sitemizdeki Ders Anlatım Sunularını İncele</button>
            <button onclick="acGeoAsistan()" style="background: linear-gradient(135deg, #0a3a40 0%, #11998e 100%); color: white; border: 1px solid white; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: bold; width: 100%;">🤖 Bu Konuyu Yapay Zeka Asistanımıza Danış</button>
        `;
    } else {
        durumMesaji = "Temel kavramlarda eksiklikler tespit edildi. Konuları tekrar etmeli ve molalarla desteklemelisin.";
        onerilenModulBtn = `
            <button onclick="goruntule('12')" style="background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%); color: white; border: 1px solid white; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: bold; width: 100%;">🏫 5. Sınıf Ders İçeriklerini İncele</button>
            <button onclick="goruntule('8')" style="background: linear-gradient(135deg, #6b11ff 0%, #b838ef 100%); color: white; border: 1px solid white; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: bold; width: 100%;">🥳 Biraz Ara Verip Eğlence Linkine Göz At</button>
        `;
    }

    soruKutusu.innerHTML = `
        <div style="background: rgba(0,0,0,0.4); padding: 12px 15px; border-radius: 8px; border: 1px solid #38ef7d; display: flex; flex-direction: column; gap: 8px; text-align: center;">
            <h3 style="color: #38ef7d; margin: 0; font-size: 16px; font-family: 'Arial Black', sans-serif;">📊 GEOWEB AI ANALİZ KARNESİ</h3>
            <div style="font-size: 13px; color: #ffffff; line-height: 1.3;">
                <b>Doğru Sayısı:</b> ${ogrenciSkoru} / 10 &nbsp;&nbsp;|&nbsp;&nbsp; <b>Başarı Oranı:</b> %${basariYuzdesi}<br>
                <b>AI Raporu:</b> ${durumMesaji}
            </div>
            <div style="display: flex; flex-direction: column; gap: 5px; margin-top: 3px;">
                ${onerilenModulBtn}
                <button onclick="adaptifSimulatoruBaslat()" style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.4); padding: 6px 10px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">🏠 Sınıf Seçimine Geri Dön</button>
            </div>
        </div>
    `;
}

//Firebase Veritabanından Öğrenci Profilini Orta Ekrana Getiren Fonksiyon
function ogrenciProfiliniGoster() {
    if (typeof firebase === 'undefined' || !firebase.auth().currentUser) {
        alert("Profilinizi görmek için lütfen GEOWEB AI sistemine giriş yapın.");
        return;
    }

    let user = firebase.auth().currentUser;

    firebase.firestore().collection("ogrenci_bilgileri").doc(user.email).get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            
            let temizModuller = [];
            if (data.tamamlanan_moduller && Array.isArray(data.tamamlanan_moduller)) {
                temizModuller = data.tamamlanan_moduller.filter(modul => modul !== "boş" && modul.trim() !== "");
            }
            
            let modullerHtml = temizModuller.length > 0
                               ? "✔️ " + temizModuller.join("<br>✔️ ")
                               : "Henüz modül tamamlanmadı.";

            let sonGiris = data.son_giris_tarihi || "Henüz kaydedilmedi";

            let eskiModal = document.getElementById("daireProfilModal");
            if(eskiModal) eskiModal.remove();

            let modal = document.createElement("div");
            modal.id = "daireProfilModal";
            modal.style.cssText = "position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);";

            modal.innerHTML = `
                <style>
                    @keyframes popInDaire {
                        0% { transform: scale(0.3); opacity: 0; }
                        70% { transform: scale(1.05); opacity: 1; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                </style>
                <div style="position: relative; width: 440px; height: 440px; border-radius: 50%; background: linear-gradient(145deg, #0a3a40, #11998e); border: 5px solid #38ef7d; box-shadow: 0 0 30px #38ef7d, inset 0 0 20px rgba(0,0,0,0.6); display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-align: center; padding: 25px; box-sizing: border-box; animation: popInDaire 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                    
                    <!-- Kapatma Çarpısı -->
                    <span onclick="document.getElementById('daireProfilModal').remove()" style="position: absolute; top: 40px; right: 65px; font-size: 22px; font-weight: bold; color: #ff4b2b; cursor: pointer; text-shadow: 1px 1px 3px black; transition: 0.3s;" onmouseover="this.style.transform='scale(1.3)'" onmouseout="this.style.transform='scale(1)'">✖</span>

                    <h2 style="margin: -15px 0 10px 0; color: #38ef7d; font-family: 'Arial Black', sans-serif; font-size: 22px; text-shadow: 2px 2px 4px black; letter-spacing: 1px;">🎓 PROFİLİM</h2>
                    
                    <div style="font-size: 15px; color: #a8ffb2; font-weight: bold; margin-bottom: 12px; background: rgba(0,0,0,0.4); padding: 8px 20px; border-radius: 20px; border: 1px solid rgba(56, 239, 125, 0.3); width: 80%;">
                        👤 Adı Soyadı: ${data.ad || user.email}
                    </div>
                    
                    <div style="font-size: 14px; line-height: 1.6; width: 100%;">
                        <p style="margin: 4px 0; text-shadow: 1px 1px 2px black;">🏆 <b>Toplam Puan:</b> <span style="color:#ffe17d; font-weight:bold; font-size: 16px;">${data.puan || 0}</span></p>
                        <p style="margin: 4px 0; text-shadow: 1px 1px 2px black;">📝 <b>Çözülen Soru:</b> ${data.cozulen_soru_sayisi || 0}</p>
                        <p style="margin: 4px 0; text-shadow: 1px 1px 2px black;">📈 <b>Seviye:</b> <span style="color:#f2994a; font-weight:bold;">${data.son_seviye || "Başlangıç"}</span></p>
                        <p style="margin: 4px 0; text-shadow: 1px 1px 2px black;">🕒 <b>Son Giriş:</b> <span style="color:#00d2ff; font-weight:bold;">${sonGiris}</span></p>
                        
                        <div style="margin-top: 12px; background: rgba(0,0,0,0.5); padding: 10px 15px; border-radius: 15px; font-size: 12px; max-height: 70px; overflow-y: auto; width: 80%; margin-left: auto; margin-right: auto; border: 1px solid rgba(255,255,255,0.1); box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5);">
                            <b style="color: #38ef7d;">✅ Biten Modüller</b><br>
                            <div style="color: #e0e0e0; line-height: 1.4; margin-top: 4px; text-align: left; padding-left: 10px;">${modullerHtml}</div>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

        } else {
            alert("Veritabanında bu kullanıcıya ait profil bilgisi bulunamadı.");
        }
    }).catch((error) => {
        console.error("Profil çekme hatası: ", error);
        alert("Profil bilgileri alınırken bir hata oluştu.");
    });
}