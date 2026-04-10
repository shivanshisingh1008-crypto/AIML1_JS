let employees = [];

function addEmployee() {
    let empId = document.getElementById("id").value;
    let empName = document.getElementById("name").value;
    let empDept = document.getElementById("department").value;
    let empSalary = document.getElementById("salary").value;

    let employee = {
        id: empId,
        name: empName,
        department: empDept,
        salary: Number(empSalary)
    };

    employees.push(employee);

    alert("Employee Added Successfully");

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";
}

function displayEmployees() {
    let text = "";

    for (let i = 0; i < employees.length; i++) {
        text += "ID: " + employees[i].id + 
                " | Name: " + employees[i].name + 
                " | Department: " + employees[i].department + 
                " | Salary: " + employees[i].salary + "<br><br>";
    }

    document.getElementById("output").innerHTML = text;
}

function filterEmployees() {
    let filtered = employees.filter(function(emp) {
        return emp.department.toLowerCase() === "it";
    });

    let text = "<h3>IT Department Employees</h3>";

    for (let i = 0; i < filtered.length; i++) {
        text += "ID: " + filtered[i].id + 
                " | Name: " + filtered[i].name + 
                " | Department: " + filtered[i].department + 
                " | Salary: " + filtered[i].salary + "<br><br>";
    }

    document.getElementById("output").innerHTML = text;
}

function calculateSalary() {
    let total = 0;

    for (let i = 0; i < employees.length; i++) {
        total = total + employees[i].salary;
    }

    document.getElementById("output").innerHTML = "<h3>Total Salary = " + total + "</h3>";
}
