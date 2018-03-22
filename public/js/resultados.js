        // Data Picker Initialization
        $('.datepicker').pickadate();

        // Material Select Initialization
        $(document).ready(function () {
            $('.mdb-select').material_select();

            var ctxB = document.getElementById("barChart").getContext('2d');
            var myBarChart = new Chart(ctxB, {
                type: 'bar',
                data: {
                    labels: ["January", "Febuary", "March", "April", "May"],
                    datasets: [{
                        label: '# of Votes',
                        data: [13, 19, 8, 11, 5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.3)',
                            'rgba(41, 182, 246, 0.3)',
                            'rgba(255, 187, 51, 0.3)',
                            'rgba(66, 133, 244, 0.3)',
                            'rgba(153, 102, 255, 0.3)',
    
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(41, 182, 246, 1)',
                            'rgba(255, 187, 51, 1)',
                            'rgba(66, 133, 244, 1)',
                            'rgba(153, 102, 255, 1)',
    
                        ],
                        borderWidth: 2
                    }]
                },
                optionss: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        });

        // Tooltips Initialization
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })