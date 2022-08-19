const form = document.getElementById('form')
const output = document.getElementById('output')

const onGenerateSubmit = (e)=>{
    e.preventDefault();
    clearUI();

    const url = document.getElementById('url').value;

    console.log(url);

    if(url == ''){
        alert("PLEASE ENTER A VALID URL")
    }
    else{
        showLoading();
        setTimeout(()=>{
            hideLoading();
            generateQR(url)
            setTimeout(()=>{
                const saveURL = output.querySelector('img').src
                save(saveURL)
            },50)
        }, 1000)
    }
}

const showLoading = () =>{
    const loading = document.getElementById('loading');
    loading.style.display  = "block"
}

const hideLoading = () =>{
    const loading = document.getElementById('loading');
    loading.style.display  = 'none';
}

const generateQR = (url)=>{
    const qrcode = new QRCode('output', {
        text: url,
        width: 200,
        height: 200
    })
}

const clearUI = () =>{
    output.innerHTML = ''
    const btn = document.getElementById('save-link')
    if(btn){
        btn.remove()
    }
}

const save =  (saveURL)=>{
    const saveLink  = document.createElement('a');
    saveLink.id = 'save-link'
    saveLink.classList = 'bg-violet-500 hover:bg-violet-700 text-white font-bold p-2 rounded w-1/3 m-auto my-5'
    saveLink.href = saveURL
    saveLink.download = 'output'
    saveLink.innerHTML = "Save QR"
    document.getElementById('generated').appendChild(saveLink)
    
}

hideLoading();

form.addEventListener('submit', onGenerateSubmit);