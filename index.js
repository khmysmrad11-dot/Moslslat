const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>المعلم AI - Moslslat</title>
            <style>
                body { background-color: #0f172a; color: white; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
                .container { background: #1e293b; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.3); width: 90%; max-width: 500px; text-align: center; }
                input { width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: none; }
                button { background-color: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold; }
                button:hover { background-color: #2563eb; }
                #result { margin-top: 20px; white-space: pre-wrap; text-align: right; background: #334155; padding: 10px; border-radius: 5px; display: none; }
            </style>
        </head>
        <body>
            <div class="container" id="login-box">
                <h2>أدخل كلمة السر للدخول</h2>
                <input type="password" id="pass" placeholder="كلمة السر...">
                <button onclick="checkPass()">دخول</button>
            </div>
            <div class="container" id="main-box" style="display:none;">
                <h2>مرحباً بك في المعلم AI</h2>
                <p>ماذا تريد أن أصمم لك اليوم؟</p>
                <input type="text" id="prompt" placeholder="اكتب فكرتك هنا...">
                <button onclick="generate()">ابدأ البرمجة</button>
                <div id="result"></div>
            </div>

            <script>
                function checkPass() {
                    const pass = document.getElementById('pass').value;
                    if(pass === 'khmeas') { // كلمة السر التي اخترتها
                        document.getElementById('login-box').style.display = 'none';
                        document.getElementById('main-box').style.display = 'block';
                    } else {
                        alert('كلمة السر خاطئة!');
                    }
                }

                async function generate() {
                    const btn = document.querySelector('#main-box button');
                    const resDiv = document.getElementById('result');
                    btn.innerText = 'جاري المعالجة...';
                    resDiv.style.display = 'block';
                    resDiv.innerText = 'المعلم AI يقوم الآن بتحليل طلبك وبناء الكود...';
                    
                    // هنا سيتم الربط مع ai-engine.js الذي برمجناه سابقاً
                    setTimeout(() => {
                        btn.innerText = 'ابدأ البرمجة';
                        resDiv.innerText = 'تم استلام طلبك! (المحرك Gemini جاهز للعمل عبر API Key الخاص بك)';
                    }, 3000);
                }
            </script>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('Server is running...'));
