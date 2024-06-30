let isSubmitted = false;

function submitQuiz() {
    if (isSubmitted) return;

    const selectedOption = document.querySelector('input[name="quizOptions"]:checked');
    const resultDiv = document.getElementById('result');
    const submitButton = document.getElementById('submitButton');

    if (selectedOption) {
        isSubmitted = true;
        if (selectedOption.value === "A") {
            resultDiv.innerHTML = '<div class="alert alert-success">HTML stands for Hyper Text Markup Language.</div>';
            submitButton.textContent = "Correct!";
            submitButton.classList.remove('btn-primary');
            submitButton.classList.add('btn-success');
        } else {
            resultDiv.innerHTML = '<div class="alert alert-danger">Try again.</div>';
            submitButton.textContent = "Incorrect!";
            submitButton.classList.remove('btn-primary');
            submitButton.classList.add('btn-danger');
        }
        submitButton.disabled = true;

        // Disable all radio buttons after submission
        const radioButtons = document.querySelectorAll('input[name="quizOptions"]');
        radioButtons.forEach(button => {
            button.disabled = true;
        });
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please select an option before submitting.</div>';
    }
}
