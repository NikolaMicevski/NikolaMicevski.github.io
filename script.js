let productLikes = {};

function likeProduct(productName) {
    if (!productLikes[productName]) {
        productLikes[productName] = 0;
    }

    productLikes[productName]++;
    updateLikeCounter(productName);
}

function updateLikeCounter(productName) {
    const likeCounter = $(`#likeCounter-${productName}`);

    if (likeCounter.length) {
        likeCounter.text(`Likes: ${productLikes[productName]}`);
    }
}

function addComment(productName) {
    const commentInput = $(`#comment-${productName}`);
    const commentText = commentInput.val().trim();

    if (commentText !== '') {
        const commentsDiv = $(`#comments-${productName}`);
        commentsDiv.append(`<p>${commentText}</p>`);
        commentInput.val('');
    }
}

$(document).ready(function() {
    function toggleLoginDropdown() {
        $('#login-dropdown-content').toggle();
    }

    function validateLogin() {
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === 'nikola' && password === 'nikola123') {
            window.location.href = 'index.html';
            alert('Successfully logged in!');
        } else {
            $('#loginError').text('Invalid username or password.');
        }
    }

    $('.login-link').click(toggleLoginDropdown);

    $('#loginForm').submit(function(event) {
        event.preventDefault();
        validateLogin();
    });

    $('#orderForm').submit(function (e) {
        e.preventDefault();
        
        var formValid = true;
        $('#orderForm input, #orderForm textarea, #orderForm select').each(function () {
            if (!$(this).val()) {
                formValid = false;
                return false;
            }
        });

        if (formValid) {
            alert('Order successfully placed!');
        } else {
            alert('Please fill out all the fields.');
        }
    });

    $('#impressionsForm').submit(function (e) {
        e.preventDefault();

        var formValid = true;
        $('#impressionsForm input, #impressionsForm textarea, #impressionsForm select').each(function () {
            if (!$(this).val()) {
                formValid = false;
                return false;
            }
        });

        if (formValid) {
            alert('Survey successfully submitted!');
        } else {
            alert('Please fill out all the required fields.');
        }
    });
});



