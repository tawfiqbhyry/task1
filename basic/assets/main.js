document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Desktop and Mobile Dropdown Toggle
    const desktopDropdown = document.getElementById('desktopDropdown');
    const desktopDropdownMenu = document.getElementById('desktopDropdownMenu');
    const mobileDropdown = document.getElementById('mobileDropdown');
    const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');

    desktopDropdown?.addEventListener('click', (e) => {
        e.stopPropagation();
        desktopDropdownMenu?.classList.toggle('hidden');
    });

    mobileDropdown?.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileDropdownMenu?.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        desktopDropdownMenu?.classList.add('hidden');
        mobileDropdownMenu?.classList.add('hidden');
    });

    // Resize Listener for Mobile Menu
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            mobileMenu?.classList.add('hidden');
        }
    });

    // Dialog and Form Handling
    const dialog = document.getElementById("dialog");
    const openDialogButton = document.getElementById("openDialogButton");
    const closeDialogButton = document.getElementById("closeDialogButton");
    const closeDialogButton2 = document.getElementById("closeDialogButton2");
    const form = document.getElementById("tripForm");
    const tripData = { title: "", description: "", travelers: [] };

    openDialogButton?.addEventListener("click", () => {
        dialog?.classList.remove("hidden");
    });
    closeDialogButton?.addEventListener("click", () => {
        dialog?.classList.add("hidden");
    });
    closeDialogButton2?.addEventListener("click", () => {
        dialog?.classList.add("hidden");
    });
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        dialog?.classList.add("hidden");
        console.log("Trip Data:", tripData);
    });
    document.getElementById("tripTitle")?.addEventListener("input", (e) => {
        tripData.title = e.target.value;
    });
    document.getElementById("tripDescription")?.addEventListener("input", (e) => {
        tripData.description = e.target.value;
    });

    // Column Toggle and Rendering
    const columns = [
        { key: "name", label: "Name", visible: true },
        { key: "start", label: "Start Date", visible: true, sortable: true },
        { key: "end", label: "End Date", visible: true, sortable: true },
        { key: "travelling", label: "Travelling", visible: true, sortable: true },
        { key: "status", label: "Status", visible: true, sortable: true },
        { key: "issues", label: "Issues", visible: true, sortable: true },
    ];
    const renderColumns = () => {
        const columnContainer = document.getElementById("columnContainer");
        columnContainer.innerHTML = "";
        columns.forEach(column => {
            const button = document.createElement("button");
            button.textContent = column.label;
            button.className = `px-3 py-1 text-sm font-medium rounded-full border transition ${column.visible ? "bg-blue-100 text-blue-800 border-blue-200" : "bg-gray-100 text-gray-600 border-gray-200"}`;
            button.addEventListener("click", () => toggleColumn(column.key));
            columnContainer.appendChild(button);
        });
    };
    const toggleColumn = (key) => {
        const column = columns.find(col => col.key === key);
        if (column) column.visible = !column.visible;
        renderColumns();
    };
    renderColumns();

    // Table Sorting
    const tableHeaders = document.querySelectorAll('th');
    let currentSort = { column: null, direction: 'ascending' };
    tableHeaders.forEach((header, index) => {
        header.addEventListener('click', () => {
            const tbody = document.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));
            currentSort.direction = (currentSort.column === index && currentSort.direction === 'ascending') ? 'descending' : 'ascending';
            currentSort.column = index;
            rows.sort((a, b) => {
                const aVal = a.children[index].textContent;
                const bVal = b.children[index].textContent;
                return currentSort.direction === 'ascending' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
            });
            tbody.innerHTML = '';
            rows.forEach(row => tbody.appendChild(row));
        });
    });

    // Map Initialization
    const map = L.map('map').setView([51.5074, -0.1278], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const marker = L.marker([51.5074, -0.1278]).addTo(map).bindPopup('A location in London');

    // Dropdown Navigation
    let currentPath = '#remit-alpha-1';
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');
    const updateActiveStates = () => {
        dropdownButton.classList.toggle('active', currentPath.startsWith('#remit-alpha'));
        document.querySelectorAll('.dropdown-item, .nav-link').forEach(el => {
            el.classList.toggle('active', el.dataset.path === currentPath);
        });
    };
    dropdownButton?.addEventListener('click', () => {
        dropdownContent?.classList.toggle('show');
    });
    window.addEventListener('click', (e) => {
        if (!dropdownButton.contains(e.target)) dropdownContent?.classList.remove('show');
    });
    document.querySelectorAll('.dropdown-item, .nav-link').forEach(el => {
        el.addEventListener('click', () => {
            currentPath = el.dataset.path;
            updateActiveStates();
            dropdownContent?.classList.remove('show');
        });
    });
    updateActiveStates();
});
