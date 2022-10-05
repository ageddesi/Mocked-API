export function genMAC() {
    var hexDigits = '0123456789ABCDEF';
    var macAddress = '';
    for (var i = 0; i < 6; i++) {
        macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ':';
    }
    return macAddress;
}
