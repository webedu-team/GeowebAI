function goruntule(ne) {
    document.getElementById("display-part").style.visibility="visible";
    switch(ne) {
        case '1': document.getElementById("display-part").innerHTML="<iframe src='linkler/projemiz/projemiz.html' width=1050 height=400></iframe>"; break;
        case '2': document.getElementById("display-part").innerHTML="<iframe src='linkler/konular/konular.html'width=1050 height=400 ></iframe>"; break;
        case '3': document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/k-anlatim.html' width=1050 height=400 ></iframe>"; break;   
        case '4': document.getElementById("display-part").innerHTML="<iframe src='linkler/testler/testler.html' width=1050 height=400 ></iframe>"; break;    
        case '5': document.getElementById("display-part").innerHTML="<iframe src='linkler/oyunlar/oyunlar.html' width=1050 height=400 ></iframe>"; break; 
        case '6': document.getElementById("display-part").innerHTML="<iframe src='linkler/videolar/videolar.html' width=1050 height=400 ></iframe>"; break;  
        case '7': document.getElementById("display-part").innerHTML="<iframe src='linkler/sunular/sunular.html' width=1050 height=400 ></iframe>"; break; 
        case '8': document.getElementById("display-part").innerHTML="<iframe src='linkler/eglence/karikatur.html' width=1050 height=400 ></iframe>"; break;    
        case '9': document.getElementById("display-part").innerHTML="<iframe src='linkler/kaynaklar/kaynaklar.html' width=1050 height=400 ></iframe>"; break; 
        case '10': document.getElementById("display-part").innerHTML="<iframe src='linkler/hakkimizda/hakkimizda2.html' width=1050 height=400 ></iframe>"; break;  
        case '11': document.getElementById("display-part").innerHTML="<iframe src='linkler/testler/pdf-testler.html' width=1050 height=400 ></iframe>"; break;
        case '12': document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/5k.html' width=1050 height=400 ></iframe>"; break; 
        case '13': document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/6k.html' width=1050 height=400 ></iframe>"; break; 
        case '14': document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/7k.html' width=1050 height=400 ></iframe>"; break; 
        case '15': document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/8k.html' width=1050 height=400 ></iframe>"; break; 
        case '16':
            document.getElementById("display-part").innerHTML = `
                <div style="padding: 20px; font-family: Arial, sans-serif; color: white;">
                    <h2 style="text-align: center; color: #8fedc6; text-shadow: 2px 2px 4px #000;">BİREYSEL YÖNLENDİRME MODÜLÜ</h2>
                    <div style="background-color: rgba(0,0,0,0.5); padding: 20px; border-radius: 10px; margin-top: 20px; border: 1px solid #ccc; box-shadow: 3px 3px 10px black;">
                        <p style="font-size: 18px; font-weight: bold;">Soru: Bir dik üçgenin dik kenar uzunlukları 6 cm ve 8 cm'dir. Bu üçgenin alanı kaç cm²'dir?</p>
                        <ul style="list-style-type: none; padding: 0;">
                            <li style="margin: 10px 0;"><button onclick="cevapKontrol('A', 'Üçgende Alan')" style="padding: 10px; width: 100%; text-align: left; cursor: pointer; border-radius: 5px; border: none; font-size:16px;">A) 14</button></li>
                            <li style="margin: 10px 0;"><button onclick="cevapKontrol('B', 'Üçgende Alan')" style="padding: 10px; width: 100%; text-align: left; cursor: pointer; border-radius: 5px; border: none; font-size:16px;">B) 24</button></li>
                            <li style="margin: 10px 0;"><button onclick="cevapKontrol('C', 'Üçgende Alan')" style="padding: 10px; width: 100%; text-align: left; cursor: pointer; border-radius: 5px; border: none; font-size:16px;">C) 48</button></li>
                            <li style="margin: 10px 0;"><button onclick="cevapKontrol('D', 'Üçgende Alan')" style="padding: 10px; width: 100%; text-align: left; cursor: pointer; border-radius: 5px; border: none; font-size:16px;">D) 60</button></li>
                        </ul>
                    </div>
                </div>
            `;
            break;
        case '17': document.getElementById("display-part").innerHTML = "<iframe src='https://www.geogebra.org/geometry' width='1050' height='400' frameborder='0' style='border-radius: 15px;'></iframe>"; break;
    }
}

function acGeoAsistan() {
    document.getElementById('asistanModal').style.display = 'block';
}

function kapatGeoAsistan() {
    document.getElementById('asistanModal').style.display = 'none';
}

async function cevaplaAsistan() {
    let soruInput = document.getElementById('asistanInput');
    let mesajEkrani = document.getElementById('asistanMesaj');
    let soru = soruInput.value.trim();

    if (!soru) return; 

    mesajEkrani.innerHTML = "GEOWEB:AI Düşünüyor... 🤔"; 
    soruInput.value = ""; 

    try {
        const API_KEY = "ŞİFREMİZİ GÜVENLİK GEREĞİ BURAYA YAZMADIK"; 
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

        const prompt = `Sen TEKNOFEST için geliştirilen 'GEOWEB:AI UYGULAMASI'nın resmi geometri asistanısın. Öğrencilere sadece geometri ve matematik konularında, kısa, net ve anlaşılır cevaplar ver. ÖNEMLİ KURAL: Matematiksel formülleri ve açıları yazarken KESİNLİKLE LaTeX formatı ($ işareti, \\mathbf, \\times, ^\\circ gibi kodlar) KULLANMA. Çarpma işlemi için *, derece için 'derece' kelimesini kullanarak tüm formülleri herkesin anlayacağı düz metin formatında yaz (Örnek: (n-2) * 180 derece). Soru şu: ${soru}`;

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            console.error("Google Hatası:", data);
            if (response.status === 503 || (data.error && data.error.message.includes("demand"))) {
                mesajEkrani.innerHTML = "Şu an sunucularımda ufak bir yoğunluk var, biraz soluklanıyorum. 😅 Lütfen birkaç saniye sonra sorunu tekrar sor!";
            } else {
                mesajEkrani.innerHTML = `⚠️ Sistem geçici olarak meşgul, lütfen tekrar deneyin.`;
            }
            return;
        }
        
        let aiCevabi = data.candidates[0].content.parts[0].text;
        aiCevabi = aiCevabi.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        mesajEkrani.innerHTML = aiCevabi;

    } catch (error) {
        mesajEkrani.innerHTML = `⚠️ İnternet bağlantınızı kontrol ediniz.`;
        console.error("Javascript Hatası:", error);
    }
}

async function sistemeGiris() {
    let email = document.getElementById('kAdi').value.trim().toLowerCase();
    let sifre = document.getElementById('kSifre').value.trim();

    if (email === "" || sifre === "") {
        alert("Lütfen e-posta adresinizi ve şifrenizi giriniz!");
        return;
    }

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, sifre);
        const docRef = db.collection("ogrenci_bilgileri").doc(email);
        const docSnap = await docRef.get();

        let gercekAd = "Öğrenci";
        
        if (docSnap.exists && docSnap.data().ad) {
            gercekAd = docSnap.data().ad;
        }

        // Öğrencinin son giriş tarihini ve saatini anlık olarak güncelleme
        let simdi = new Date();
        let formatliTarih = simdi.toLocaleDateString('tr-TR') + " - " + simdi.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
        await docRef.update({
            son_giris_tarihi: formatliTarih
        });

        localStorage.setItem("aktifOgrenciEmail", email);
        localStorage.setItem("aktifOgrenciAd", gercekAd);

        let fotoAdi = email.split("@")[0];

        let girisKutusu = document.querySelector('.logo2');
        girisKutusu.innerHTML = `
            <style>
                @keyframes cerceveYesilYanipSonur {
                    0% { border-color: #38ef7d; box-shadow: 0 0 5px #38ef7d, 0px 4px 8px rgba(0,0,0,0.6); }
                    50% { border-color: #11998e; box-shadow: 0 0 20px #38ef7d, 0px 4px 8px rgba(0,0,0,0.6); }
                    100% { border-color: #38ef7d; box-shadow: 0 0 5px #38ef7d, 0px 4px 8px rgba(0,0,0,0.6); }
                }
                @keyframes yaziKirmiziYanipSonur {
                    0%, 100% { color: #ff4b2b; opacity: 1; transform: scale(1); }
                    50% { color: #ff416c; opacity: 0.3; transform: scale(0.95); }
                }
                .animasyonlu-profil {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    border: 3px solid #38ef7d;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                    margin: 0 auto;
                    animation: cerceveYesilYanipSonur 2s infinite ease-in-out;
                    animation-iteration-count: 10;
                }
                .hosgeldin-banner {
                    position: absolute;
                    top: -14px;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    font-size: 14px;
                    font-family: 'Arial Black', Arial, sans-serif;
                    text-shadow: 1px 1px 2px black;
                    animation: yaziKirmiziYanipSonur 2s infinite ease-in-out;
                    animation-iteration-count: 10;
                    z-index: 10;
                }
            </style>
            <div style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; box-sizing: border-box;">
                <div class="hosgeldin-banner" id="hosgeldinYazisi">HOŞGELDİN</div>
                <!-- Profile tıklama olayı -->
                <img src="fotos/${fotoAdi}.png" onerror="this.src='fotos/asistan.png'" class="animasyonlu-profil" onclick="ogrenciProfiliniGoster()" style="cursor: pointer;" title="Gelişim Raporumu Görüntüle">
                <b style="color: white; font-size: 10px; font-family: 'Arial Black', Arial, sans-serif; margin-top: 10px; text-align: center; letter-spacing: 0.5px; text-shadow: 1px 1px 2px black;">${gercekAd}</b>
                <span style="color: #38ef7d; font-size: 10px; font-family: Arial, sans-serif; font-weight: bold; margin-top: 4px; letter-spacing: 0.5px; text-shadow: 1px 1px 2px black;">● ÇEVRİMİÇİ</span>
            </div>
        `;

        setTimeout(() => {
            let profilResmi = document.querySelector('.animasyonlu-profil');
            let yaziAlani = document.getElementById('hosgeldinYazisi');
            
            if (profilResmi) {
                profilResmi.style.animation = 'none';
                profilResmi.style.borderColor = '#38ef7d';
                profilResmi.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.6)';
            }
            if (yaziAlani) {
                yaziAlani.style.display = 'none'; 
            }
        }, 10000);

        alert("Bulut sistemine başarıyla bağlandın! Hoş geldin, " + gercekAd);

    } catch (error) {
        alert("Giriş Başarısız! Hatalı e-posta veya şifre.");
        console.error("Firebase Giriş Hatası:", error);
    }
}