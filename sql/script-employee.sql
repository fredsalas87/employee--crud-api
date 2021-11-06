CREATE TABLE employee (
	employee_id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
	name VARCHAR(255) NOT NULL,
	job_role VARCHAR(255) NOT NULL,
	salary NUMERIC(5,2),
	birth DATE NOT NULL,
	employee_registration INTEGER NOT NULL
)