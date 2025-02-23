 function calculate() {
            let input = document.forms['form1']['n1'].value;

            // Handle percentage calculations directly
            if (input.includes('%')) {
                const parts = input.split('%');
                if (parts.length === 2) {
                    const num1 = parseFloat(parts[0]);
                    const num2 = parseFloat(parts[1]);
                    const result = (num1 / 100) * num2;
                    document.forms['form1']['n1'].value = result;
                    document.getElementById('expression').value = `${result}`;
                    return;
                }
            }

            const result = eval(input);
            document.forms['form1']['n1'].value = result;
            document.getElementById('expression').value = input;
        }