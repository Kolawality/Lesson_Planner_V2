window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const objective = params.get('objective');
    const success1 = params.get('success1');

    document.getElementById('objective-entered').innerHTML = objective;
    document.getElementById('success1').innerHTML = success1;
})



