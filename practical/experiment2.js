let employees = [];

        function addemployee() {
            let name = document.getElementById("name").value;
            let empid = document.getElementById("empid").value;
            let salary = parseFloat(document.getElementById("salary").value);
            let department = document.getElementById("department").value;

            if (name == "" || empid == "" || isNaN(salary) || department == "") {
                alert("Please fill all fields properly");
                return;
            }

            let employee = {
                name: name,
                id: empid,
                salary: salary,
                department: department
            };

            employees.push(employee);
            alert("Employee added successfully!");
            
            // Clear form
            document.getElementById("name").value = "";
            document.getElementById("empid").value = "";
            document.getElementById("salary").value = "";
            document.getElementById("department").value = "";
        }

        function displayEmployees() {
            let output = "<h3>All Employees (" + employees.length + ")</h3>";
            if (employees.length === 0) {
                output += "<p>No employees added yet.</p>";
            } else {
                employees.forEach(function(emp) {
                    output += "<div class='employee-card'>";
                    output += "Name: " + emp.name + " | ID: " + emp.id;
                    output += " | Salary: ₹" + emp.salary.toLocaleString();
                    output += " | Department: " + emp.department;
                    output += "</div>";
                });
            }
            document.getElementById("output").innerHTML = output;
        }

        function filterSalary() {
            let filtered = employees.filter(function(emp) { return emp.salary > 50000; });
            let output = "<h3>Employees with Salary > ₹50,000 (" + filtered.length + ")</h3>";
            if (filtered.length === 0) {
                output += "<p>No employees with salary above 50k.</p>";
            } else {
                filtered.forEach(function(emp) {
                    output += "<div class='employee-card high-salary'>";
                    output += "Name: " + emp.name + " | Salary: ₹" + emp.salary.toLocaleString();
                    output += "</div>";
                });
            }
            document.getElementById("output").innerHTML = output;
        }

        function totalSalary() {
            let total = 0;
            employees.forEach(function(emp) {
                total += emp.salary;
            });
            document.getElementById("output").innerHTML = 
                "<h3>Total Salary Payout</h3>" +
                "<div class='total-box'>₹" + total.toLocaleString() + "</div>";
        }

        function avgSalary() {
            if (employees.length === 0) {
                document.getElementById("output").innerHTML = "<h3>No employees</h3>";
                return;
            }
            let total = 0;
            employees.forEach(function(emp) {
                total += emp.salary;
            });
            let avg = total / employees.length;
            document.getElementById("output").innerHTML = 
                "<h3>Average Salary</h3>" +
                "<div class='avg-box'>₹" + avg.toFixed(0).toLocaleString() + "</div>";
        }

        function countDept() {
            let count = 0;
            employees.forEach(function(emp) {
                if (emp.department === "IT") {
                    count++;
                }
            });
            document.getElementById("output").innerHTML = 
                "<h3>IT Department Count</h3>" +
                "<div class='count-box'>" + count + " employees</div>";
        }