$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        const taskName = $('#taskInput').val();
        const priority = $('#prioritySelect').val();
        if (taskName) {
            $('#taskList').append(`<li class="priority-${priority}">${taskName}</li>`);
            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});