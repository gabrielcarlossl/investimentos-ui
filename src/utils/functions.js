export function getLastUrl() {
    const url = window.location.href
    const lastSegment = url.split('/').filter(Boolean).pop()
    return lastSegment
   
}