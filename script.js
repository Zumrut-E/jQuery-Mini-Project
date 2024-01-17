$(document).ready(function () {
    function newItem() {
        let inputValue = $('#input').val();

        // Check if the input is not empty
        if (inputValue !== '') {

            // Create a new list item and append the input value
            let newItem = $('<li>').text(inputValue);

            // Append the new item to the list
            $('#list').append(newItem);

            $(newItem).on('click', function () {
                // Toggle the "strike" class to cross out or un-cross out the item
                $(this).toggleClass('strike');
            });

            // Create a delete button for the new item
            let deleteButton = $('<span class="delete-btn">X</span>');

            // Add click event listener to the delete button
            deleteButton.click(function () {
                newItem.remove();
            });

            // Append the delete button to the new item
            newItem.append(deleteButton);

            $('#list').append(newItem);

            // Clear the input field
            $('#input').val('');

            //Make the list sortable
            $('#list').sortable();

        } else {
            alert('You must write something!');
        }
    }
    window.newItem = newItem;
});

