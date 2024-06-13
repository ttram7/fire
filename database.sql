-- Create the table
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    city VARCHAR(100),
    state CHAR(2),
    photo TEXT,
    available_units INT,
    healthcare_score VARCHAR(50),
    laundry BOOLEAN,
    col INT,
    population INT
);

-- Insert the data into the table
INSERT INTO locations (name, city, state, photo, available_units, healthcare_score, laundry, col, population)
VALUES
('Chicago, IL', 'Chicago', 'IL', 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 4, 'ranked 23rd', TRUE, 3000, 2697000),
('Santa Monica, CA', 'Santa Monica', 'CA', 'https://images.unsplash.com/photo-1505887579242-c7bc04062e98?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 0, 'ranked 14th', TRUE, 4500, 91105),
('Juneau, AK', 'Juneau', 'AK', 'https://images.unsplash.com/photo-1631900183743-be3f34b6042b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1, 'ranked 39th', FALSE, 1200, 31973),
('Seattle, WA', 'Seattle', 'WA', 'https://images.unsplash.com/photo-1589481169991-40ee02888551?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1, 'ranked 7th', FALSE, 4000, 733919),
('Honolulu, HI', 'Honolulu', 'HI', 'https://images.unsplash.com/photo-1573993228224-5ffd3f00511c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9ub2x1bHV8ZW58MHx8MHx8fDA%3D', 1, 'ranked 2nd', FALSE, 5000, 345510),
('New York City, NY', 'New York City', 'NY', 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2, 'ranked 9th', TRUE, 5200, 8468000),
('Las Vegas, NV', 'Las Vegas', 'NV', 'https://images.unsplash.com/photo-1516975698824-571e2c952dbd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 5, 'ranked 41st', TRUE, 2200, 646790),
('Atlanta, GA', 'Atlanta', 'GA', 'https://images.unsplash.com/photo-1611106014123-092d7642f560?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2, 'ranked 45th', TRUE, 2500, 496461),
('Miami, FL', 'Miami', 'FL', 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1pYW1pJTIwZmxvcmlkYXxlbnwwfHwwfHx8MA%3D%3D', 10, 'ranked 36th', FALSE, 3200, 439890);