// Placeholder data
const mockData = {
  users: [
    {
      id: "f1d1d4cc-6347-4d3c-8828-01d94b8a87c9",
      username: "user1",
      phoneNumber: "+1234567890",
      role: "regular",
    },
    {
      id: "12a3f057-79e2-478c-9377-af522259ae78",
      username: "agent1",
      phoneNumber: "+9876543210",
      role: "agent",
      assignedLocation: "Gate A",
    },
    {
      id: "d317590a-04c2-4ea8-aee1-c91f6ac7c621",
      username: "admin1",
      phoneNumber: "+11122334455",
      role: "admin",
    },
    // Add more users
    // ...
    {
      id: "ae26f86f-5ec0-4e0b-810a-8eef56c309fc",
      username: "user9",
      phoneNumber: "+1122334455",
      role: "regular",
    },
    {
      id: "87cb499b-796c-4dbd-a308-4b28701d99d1",
      username: "admin2",
      phoneNumber: "+9988776655",
      role: "admin",
    },
  ],
  locations: [
    {
      id: "5f1edf63-6f95-4b1d-8cb8-06556a1b6181",
      name: "Gate A",
      description: "Main entrance",
    },
    {
      id: "1b33189d-4c37-4d69-8a16-fb09a9f1a09d",
      name: "Office B",
      description: "Lost and Found Office",
    },
    // Add more locations
    // ...
    {
      id: "8e9c0f29-49e3-4aaf-9b31-d15eaa57d49a",
      name: "Gate C",
      description: "Secondary entrance",
    },
    {
      id: "02fda848-b5f8-4154-a3e5-2e8a21b346ea",
      name: "Cafeteria",
      description: "Common eating area",
    },
  ],
  items: [
    {
      id: "8a3ce9c1-c43e-4322-bffe-9ef7fc4a4d91",
      name: "Laptop",
      description: "Silver MacBook",
      category: "Electronics",
      dateLost: "2023-01-15",
      location: "Gate A",
      status: "reported",
      images: ["image1.jpg"],
      owner: "f1d1d4cc-6347-4d3c-8828-01d94b8a87c9",
    },
    {
      id: "d59162fc-4c4f-45df-8f71-593dfb6e320d",
      name: "Keys",
      description: "House keys",
      category: "Keys",
      dateLost: "2023-01-10",
      location: "Gate B",
      status: "claimed",
      images: ["image2.jpg"],
      owner: "12a3f057-79e2-478c-9377-af522259ae78",
    },
    // Add more items
    // ...
    {
      id: "3b4b4624-ba24-4d9e-9f8d-5c104d6a72e2",
      name: "Watch",
      description: "Silver wristwatch",
      category: "Accessories",
      dateLost: "2023-02-20",
      location: "Office B",
      status: "found",
      images: ["image3.jpg"],
      owner: "ae26f86f-5ec0-4e0b-810a-8eef56c309fc",
    },
    {
      id: "b9501bd8-6bae-415c-9816-7252e3e69f2e",
      name: "Book",
      description: "Fiction novel",
      category: "Books",
      dateLost: "2023-02-28",
      location: "Cafeteria",
      status: "reported",
      images: ["image4.jpg"],
      owner: "87cb499b-796c-4dbd-a308-4b28701d99d1",
    },
  ],
};

// Export the placeholder data
export default mockData;
