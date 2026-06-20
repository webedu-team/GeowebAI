function goruntule(ne)
{

document.getElementById("display-part").style.visibility="visible";
switch(ne)
{
    case '1':
  
            document.getElementById("display-part").innerHTML="<iframe src='linkler/projemiz/projemiz.html' width=1050 height=400></iframe>"; 
            
            break;
    case '2':
                document.getElementById("display-part").innerHTML="<iframe src='linkler/konular/konular.html'width=1050 height=400 ></iframe>"; 
                
            break;
    case '3':
                document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/k-anlatim.html' width=1050 height=400 ></iframe>"; 
                
    break;   
    case '4':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/testler/testler.html' width=1050 height=400 ></iframe>"; 
        
    break;    
    case '5':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/oyunlar/oyunlar.html' width=1050 height=400 ></iframe>"; 
        
    break; 
    case '6':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/videolar/videolar.html' width=1050 height=400 ></iframe>"; 
        
    break;  
    case '7':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/sunular/sunular.html' width=1050 height=400 ></iframe>"; 
        
    break; 
    case '8':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/eglence/karikatur.html' width=1050 height=400 ></iframe>"; 
        
    break;    
    case '9':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/kaynaklar/kaynaklar.html' width=1050 height=400 ></iframe>"; 
        
    break; 
    case '10':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/hakkimizda/hakkimizda2.html' width=1050 height=400 ></iframe>"; 
        
    break;  
case '11':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/testler/pdf-testler.html' width=1050 height=400 ></iframe>"; 
    break;
        
    break; 
    case '12':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/5k.html' width=1050 height=400 ></iframe>"; 
        
    break; 
    case '13':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/6k.html' width=1050 height=400 ></iframe>"; 
        
    break; 
    case '14':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/7k.html' width=1050 height=400 ></iframe>"; 
        
    break; 
    case '15':
        document.getElementById("display-part").innerHTML="<iframe src='linkler/k-anlatimi/8k.html' width=1050 height=400 ></iframe>"; 
        
    break; 
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
     case '17':
    document.getElementById("display-part").innerHTML = "<iframe src='https://www.geogebra.org/geometry' width='1050' height='400' frameborder='0' style='border-radius: 15px;'></iframe>";
    break;
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
        const API_KEY = "BURAYA API-KEY GELECEK"; 
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

        const prompt = `Sen TEKNOFEST için geliştirilen 'GEOWEB:AI UYGULAMASI'nın resmi geometri asistanısın. Öğrencilere sadece geometri ve matematik konularında, kısa, net ve anlaşılır cevaplar ver. Soru şu: ${soru}`;

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        
        // GÜVENLİK KALKANI EKLENDİ
        if (!response.ok) {
            console.error("Google Hatası:", data);
            // Eğer yoğunluk hatasıysa şık bir mesaj ver
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
        // İNTERNET VEYA SİSTEM HATASIYSA:
        mesajEkrani.innerHTML = `⚠️ İnternet bağlantınızı kontrol ediniz.`;
        console.error("Javascript Hatası:", error);
    }
}
function sistemeGiris() {
    let ogrenciAdi = document.getElementById('kAdi').value.trim().toLowerCase();
    let sifre = document.getElementById('kSifre').value.trim();

    if (ogrenciAdi === "" || sifre === "") {
        alert("Lütfen kullanıcı adı ve şifreyi giriniz!");
        return;
    }

    let gercekAd = "";
    let fotoUrl = "";
    let dogruSifre = "12344321"; // Sunumda kolaylık olması için ortak şifre

    // Kullanıcı adı ve şifre kontrolleri
    if (ogrenciAdi === "beste" && sifre === dogruSifre) {
        gercekAd = "Beste YAŞAROLU";
        fotoUrl = "fotos/beste.png"; 
    } else if (ogrenciAdi === "harun" && sifre === dogruSifre) {
        gercekAd = "Harun TAŞKALDIRAN";
        fotoUrl = "fotos/harun.png";
    } else if (ogrenciAdi === "sibel" && sifre === dogruSifre) {
        gercekAd = "Sibel KILLI";
        fotoUrl = "fotos/ben.jpg";
    } else {
        alert("Hatalı kullanıcı adı veya şifre!");
        return;
    }

    // Uyumlu Öğrenme Algoritması için LocalStorage hafıza kayıtları
    localStorage.setItem("aktifOgrenci", ogrenciAdi);
    if(!localStorage.getItem(ogrenciAdi + "_hatalar")) {
        localStorage.setItem(ogrenciAdi + "_hatalar", JSON.stringify([]));
    }

    // Giriş kutusunu harika bir profil görseline dönüştürme sihirbazı
    let girisKutusu = document.querySelector('.logo2');
    girisKutusu.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; padding-top: 10px; box-sizing: border-box;">
            <img src="${fotoUrl}" style="width: 90px; height: 90px; border-radius: 50%; border: 3px solid #38ef7d; box-shadow: 0px 4px 8px rgba(0,0,0,0.6); object-fit: cover;">
            
            <b style="color: white; font-size: 10px; font-family: 'Arial Black', Arial, sans-serif; margin-top: 12px; text-align: center; letter-spacing: 0.5px; text-shadow: 1px 1px 2px black;">${gercekAd}</b>
            
            <span style="color: #38ef7d; font-size: 10px; font-family: Arial, sans-serif; font-weight: bold; margin-top: 5px; letter-spacing: 0.5px; text-shadow: 1px 1px 2px black;">● ÇEVRİMİÇİ</span>
        </div>
    `;

    alert("Hoş geldin " + gercekAd + "! GeoWeb AI sistemine başarıyla giriş yaptın.");
}