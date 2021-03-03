window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const objective = params.get('objective');

    document.getElementById('objective-entered').innerHTML = objective;
})



