-- Create the properties table
CREATE TABLE public.properties (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    price_per_night NUMERIC NOT NULL,
    is_available BOOLEAN NOT NULL DEFAULT true,
    image_url TEXT
);

-- Create the guests table
CREATE TABLE public.guests (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL
);

-- Add some sample data to properties
INSERT INTO public.properties (name, location, price_per_night, image_url)
VALUES 
('Cozy Cabin', 'Mountain View, CA', 150, 'https://images.unsplash.com/photo-1518780664697-55e3ad937233'),
('Beachfront Villa', 'Malibu, CA', 300, 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2'),
('Downtown Loft', 'San Francisco, CA', 200, 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688');

-- Add some sample data to guests
INSERT INTO public.guests (name, email, phone)
VALUES 
('John Doe', 'john@example.com', '123-456-7890'),
('Jane Smith', 'jane@example.com', '098-765-4321');