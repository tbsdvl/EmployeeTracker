USE employee_trackerDB;

INSERT INTO department (name)
VALUES ("Human Resources"), ("Maintenance"), ("Logistics"), ("Medicine"), ("Local Wildlife Removal"), ("Sanitation");

INSERT INTO role (title, salary, department_id)
VALUES ("Vicar", 60000.0, 1), ("Engineer", 75000.0, 2), ("Stevedore", 45000.0, 3), ("Medic", 80000.0, 4), ("Merc", 55000.0, 5), ("Sanitation Auto Mechanical", 0.0, 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Max", "Desoto", 1), ("Parvati", "Holcomb", 2), ("Felix", "Millstone", 3), ("Ellie", "Fenhill", 4), ("Nyoka", NULL, 5), ("SAM", NULL, 6);