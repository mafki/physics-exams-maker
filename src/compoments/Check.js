export default function check(data) {
    if (Object.keys(data).length === 2 ) {
        return false
    } else if (Object.keys(data).length >= 2) {
        return true
    }

return false; // Doesn't match any format
}