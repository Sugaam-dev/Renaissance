import React from 'react';
import './BranchesCard.css';

export default function BranchesCard() {
  const branches = [
    {
      id: 1,
      name: 'Salunke Vihar',
      address: '106, Picasso Kedari Icon, Salunke Vihar Road, Kubera Garden, Kondhwa, Pune, Maharashtra 411048',
      phones: ['+91-9021071084', '+91-9763833628'],
      email: 'support@renaissancedesigns.in',
      color: '#17a2a2',
      searchQuery: 'The Renaissance Salunke Vihar Pune'
    },
    {
      id: 2,
      name: 'Viman Nagar',
      address: 'G-10, Ashoka Plaza, Nagar Road, Viman Nagar, Pune, Pin - 411014',
      phones: ['+91-9021071084', '+91-9763833628'],
      email: 'support@renaissancedesigns.in',
      color: '#ff9500',
      searchQuery: 'The Renaissance Viman Nagar Pune'
    },
    {
      id: 3,
      name: 'Aundh',
      address: '10, First Floor, Niyoshi Park -3 CHS, Opp Indusind Bank, Sanghvi Road, Aundh, Pune, Maharashtra 411007',
      phones: ['+91-9021071084', '+91-9763833628'],
      email: 'support@renaissancedesigns.in',
      color: '#22bb22',
      searchQuery: 'The Renaissance Aundh Pune'
    },
    {
      id: 4,
      name: 'Kothrud',
      address: 'Flat No 14, Vitthal Smruti CHS, Near Konkan Express Hotel, Oppsite Kothrud Bus Stand, Kothrud, Pune, Maharashtra 411038',
      phones: ['+91-9021071084', '+91-9763833628'],
      email: 'support@renaissancedesigns.in',
      color: '#0066ff',
      searchQuery: 'The Renaissance Kothrud Pune'
    },
    {
      id: 5,
      name: 'Ghatkia, Bhubaneswar',
      address: 'Apartments, Samasti 1001 Greens, A5/5, Ghatkia, Bhubaneswar, Odisha 751003',
      phones: ['+91-9021071084', '+91-9763833628'],
      email: 'support@renaissancedesigns.in',
      color: '#22bb22',
      searchQuery: 'The Renaissance Ghatkia Bhubaneswar'
    },
    {
      id: 6,
      name: 'Nerul, Navi Mumbai',
      address: 'G - 105, First Floor, Nerul Railway Station Complex, West Side, Above Ticket Window, Nerul, Navi Mumbai, Maharashtra 400706',
      phones: ['+91-9021071084', '+91-9763833628'],
      email: 'support@renaissancedesigns.in',
      color: '#0066ff',
      searchQuery: 'The Renaissance Nerul Navi Mumbai'
    }
  ];

  return (
    <div className="branches-wrapper">
      <h2 className="branches-title">Our Branches</h2>
      <div className="branches-grid">
        {branches.map((branch) => (
          <div key={branch.id} className="branch-card" style={{ backgroundColor: branch.color }}>
            <div className="branch-header">
              <h3>{branch.name}</h3>
              <p className="branch-label">THE RENAISSANCE</p>
            </div>
            
            <div className="branch-info">
              <p className="branch-address">{branch.address}</p>
              
              <div className="branch-contact">
                {branch.phones.map((phone, idx) => (
                  <p key={idx} className="branch-phone">{phone}</p>
                ))}
                <p className="branch-email">{branch.email}</p>
              </div>
            </div>

            <div className="branch-map">
              <iframe
                title={`Map - ${branch.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(branch.searchQuery)}&output=embed`}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            <a href={`https://www.google.com/maps/search/${encodeURIComponent(branch.searchQuery)}`} target="_blank" rel="noopener noreferrer" className="branch-map-link">
              View Larger Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
