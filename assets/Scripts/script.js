const dashboardboxs = document.querySelectorAll('.dashboardbox');
dashboardboxs.forEach(dashboardbox => {
    dashboardbox.addEventListener('click', () => {
        removeActive();
        dashboardbox.classList.add('selected');
    })
})

    function removeActive() {
        dashboardboxs.forEach(dashboardbox => {
            dashboardbox.classList.remove('selected');
        })
    }