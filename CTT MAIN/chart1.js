const ctx = document.getElementById('chart1').getContext('2d');

const chart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Java', 'SQL', 'Python', 'PHP', 'C#', 'C', 'BASH', 'C++'],
        datasets: [{
            label: '# of Votes',
            data: [30, 50, 10, 5, 3, 2, 8, 12, 6, 4, 7], // Adjusted data values
            backgroundColor: [
                'rgba(255, 165, 0, 0.2)',  // HTML - Orange with transparency
                'rgba(54, 162, 235, 0.2)', // CSS - Blue with transparency
                'rgba(255, 206, 86, 0.2)', // JavaScript - Yellow with transparency
                'rgba(255, 69, 0, 0.2)',   // Java - Slightly Less Red with transparency
                'rgba(255, 105, 180, 0.2)',// SQL - Very Pink with transparency
                'rgba(0, 100, 0, 0.2)',    // Python - Dark Green with transparency
                'rgba(192, 192, 192, 0.2)',// PHP - Silver with transparency
                'rgba(50, 205, 50, 0.2)',  // C# - Very Lime with transparency
                'rgba(0, 0, 255, 0.2)',    // C - Blue with transparency
                'rgba(255, 0, 0, 0.2)',    // BASH - Red with transparency
                'rgba(128, 0, 128, 0.2)'   // C++ - Purple with transparency
            ],
            borderColor: [
                'rgba(255, 165, 0, 1)',  // HTML - Orange
                'rgba(54, 162, 235, 1)', // CSS - Blue
                'rgba(255, 206, 86, 1)', // JavaScript - Yellow
                'rgba(255, 69, 0, 1)',   // Java - Slightly Less Red
                'rgba(255, 105, 180, 1)',// SQL - Very Pink
                'rgba(0, 100, 0, 1)',    // Python - Dark Green
                'rgba(192, 192, 192, 1)',// PHP - Silver
                'rgba(50, 205, 50, 1)',  // C# - Very Lime
                'rgba(0, 0, 255, 1)',    // C - Blue
                'rgba(255, 0, 0, 1)',    // BASH - Red
                'rgba(128, 0, 128, 1)'   // C++ - Purple
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true
            }
        },
    }
});
