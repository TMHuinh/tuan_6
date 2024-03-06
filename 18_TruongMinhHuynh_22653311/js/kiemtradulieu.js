function KiemTraTenDN() {
    var re = /^[a-z]\w*/;
    if (re.test(document.getElementById('txtDN').value.trim()) == false) {
        tendn.innerText = "*Bắt buộc bắt đầu bằng kí tự";
        return false;
    } else {
        tendn.innerText = "*";
        return true;
    }
}

function KiemTraMK() {
    var re = /(?=.*\d).{6,}/;
    if (re.test(document.getElementById('txtMK').value.trim()) == false) {
        mk.innerText = "*phải có chữ, số, ít nhất 6 kí tự";
        return false;
    } else {
        mk.innerText = "*";
        return true;
    }
}

function KiemTraXNMK() {
    if (document.getElementById('txtXNMK').value != document.getElementById("txtMK").value) {
        xnmk.innerText = "*phải giống ô mật khẩu";
        return false;
    } else {
        xnmk.innerText = "*";
        return true;
    }
}

function SubmitForm() {
    if (KiemTraTenDN() == false || KiemTraMK() == false || KiemTraXNMK == false) {
        alert('bạn chưa nhập đầy đủ thông tin!');
        return false;
    }
    return true;
}