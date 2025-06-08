import { useState } from 'react';
import { workItems } from '../data/workItems';

function WorkCard({ item, sectionId }) {
  // For annual reports, split the title at the colon and render the part after the colon on a new line
  const isAnnualReport = sectionId === 'narrative-impact';
  let titleMain = item.title;
  let titleSub = null;
  if (isAnnualReport && item.title.includes(':')) {
    [titleMain, titleSub] = item.title.split(/:(.+)/); // split at first colon
  }
  // Only use side-by-side layout for cards with a thumbnail (Annual Reports)
  if (item.thumbnail && isAnnualReport) {
    return (
      <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5em' }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{
            width: '120px',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
            objectFit: 'cover',
            flexShrink: 0
          }}
        />
        <div style={{ flex: 1 }}>
          {item.outlet && (
            <div className="card-outlet" style={{ marginBottom: '0.7em' }}>{item.outlet}</div>
          )}
          <div className="card-title">
            {titleSub ? (
              <>
                {titleMain}:
                <br />
                <span style={{ fontWeight: 400 }}>{titleSub.trim()}</span>
              </>
            ) : (
              item.title
            )}
          </div>
          {item.description && (
            <div style={{ 
              marginBottom: '1.2em', 
              fontSize: '0.95em', 
              lineHeight: '1.6',
              color: 'var(--text)'
            }}>
              {item.description}
            </div>
          )}
          {item.links ? (
            <ul style={{ margin: '0 0 0 1em', padding: 0 }}>
              {item.links.map((link, index) => (
                <li key={index}>
                  <a className="card-link" href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          {item.quote && (
            <div className="card-outlet" style={{ marginTop: '0.5em', fontSize: '0.95em' }}>
              <div style={{ marginBottom: '0.5em', whiteSpace: 'pre-line' }}>Quote: {item.quote}</div>
              {!item.quote.includes('Stephanie Rendon') && (
                <div style={{ fontStyle: 'italic', color: 'var(--secondary)' }}>— Stephanie Rendon</div>
              )}
            </div>
          )}
          {item.extra && (
            <div style={{ marginTop: '1em' }}>
              <p>{item.extra}</p>
            </div>
          )}
          {item.link && (
            <div style={{ marginTop: '1.5em', textAlign: 'right' }}>
              <a 
                className="card-link" 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={item.linkText ? {} : { fontWeight: 600, fontSize: '1.08em' }}
              >
                {item.linkText || (sectionId === 'earned-media' || sectionId === 'press-releases-stories' ? 'View Story' : 'View Report')}
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
  // For all other cards (including Earned Media and Press Releases), use the same box layout
  return (
    <div className="card">
      {item.outlet && (
        <div className="card-outlet" style={{ marginBottom: '0.7em' }}>{item.outlet}</div>
      )}
      <div className="card-title">
        {isAnnualReport && titleSub ? (
          <>
            {titleMain}:
            <br />
            <span style={{ fontWeight: 400 }}>{titleSub.trim()}</span>
          </>
        ) : (
          item.title
        )}
      </div>
      {item.description && (
        <div style={{ 
          marginBottom: '1.2em', 
          fontSize: '0.95em', 
          lineHeight: '1.6',
          color: 'var(--text)'
        }}>
          {item.description}
        </div>
      )}
      {item.thumbnail && (
        <div style={{ marginBottom: '1.2em', display: 'flex', justifyContent: 'center' }}>
          <img 
            src={item.thumbnail} 
            alt={item.title}
            style={{
              width: '120px',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
              objectFit: 'cover',
              margin: '0 auto'
            }}
          />
        </div>
      )}
      {item.links ? (
        <ul style={{ margin: '0 0 0 1em', padding: 0 }}>
          {item.links.map((link, index) => (
            <li key={index}>
              <a className="card-link" href={link.url} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      {item.quote && (
        <div className="card-outlet" style={{ marginTop: '0.5em', fontSize: '0.95em' }}>
          <div style={{ marginBottom: '0.5em', whiteSpace: 'pre-line' }}>Quote: {item.quote}</div>
          {!item.quote.includes('Stephanie Rendon') && (
            <div style={{ fontStyle: 'italic', color: 'var(--secondary)' }}>— Stephanie Rendon</div>
          )}
        </div>
      )}
      {item.extra && (
        <div style={{ marginTop: '1em' }}>
          <p>{item.extra}</p>
        </div>
      )}
      {item.link && (
        <div style={{ marginTop: '1.5em', textAlign: 'right' }}>
          <a 
            className="card-link" 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={item.linkText ? {} : { fontWeight: 600, fontSize: '1.08em' }}
          >
            {item.linkText || (sectionId === 'earned-media' || sectionId === 'press-releases-stories' ? 'View Story' : 'View Report')}
          </a>
        </div>
      )}
    </div>
  );
}

function VideoCard({ item }) {
  return (
    <div className="card">
      <div className="card-title">
        {item.title}
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '1em' }}>
        <iframe 
          src={`https://www.youtube.com/embed/${item.youtubeId}`}
          title={item.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
        />
      </div>
      <div style={{ marginTop: '1.5em', textAlign: 'right' }}>
        <a 
          className="card-link" 
          href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'press-releases-stories', label: 'Press Releases & Stories' },
    { id: 'videos', label: 'Videos' },
    { id: 'narrative-impact', label: 'Annual Reports' },
    { id: 'earned-media', label: 'Earned Media' }
  ];

  const renderSection = (sectionId, items, isSingleCol = false) => {
    if (activeFilter !== 'all' && activeFilter !== sectionId) return null;

    return (
      <div key={sectionId}>
        <h2 id={sectionId}>{filters.find(f => f.id === sectionId)?.label}</h2>
        {sectionId === 'websites' && (
          null
        )}
        {sectionId === 'earned-media' && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ maxWidth: '800px', margin: '0 0 2.2em 0', fontSize: '1.13em', lineHeight: 1.7, color: 'var(--text)', textAlign: 'center' }}>
              I've worked closely with media outlets to secure coverage that highlights key programs and initiatives, helping to raise visibility, attract support, and position our work as impactful and newsworthy.
            </p>
          </div>
        )}
        {sectionId === 'narrative-impact' && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ 
              margin: '0 0 2.2em 0', 
              fontSize: '1.13em', 
              lineHeight: 1.7, 
              color: 'var(--text)', 
              textAlign: 'center',
              maxWidth: '800px'
            }}>
              As editor at FIU Stempel College, I used the annual Impact Report to highlight the work of our researchers, students, and alumni. I oversaw all aspects of production—from writing and editing to managing designers, leading photoshoots, and coordinating with stakeholders across departments. The final report served as a key piece to showcase the college's achievements to peers, donors, supporters, and the broader college community.
            </p>
          </div>
        )}
        {sectionId === 'videos' && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ 
              margin: '0 0 2.2em 0', 
              fontSize: '1.13em', 
              lineHeight: 1.7, 
              color: 'var(--text)', 
              textAlign: 'center',
              maxWidth: '800px'
            }}>
              As the producer for these projects, I managed the production from start to finish. I identified compelling interviewees, secured shoot locations, prepped all participants, and directed on-site logistics. Following the shoot, I guided the post-production process to ensure the final story aligned perfectly with our messaging goals.
            </p>
          </div>
        )}
        <div className={`work-list ${isSingleCol ? 'single-col' : ''}`}>
          {items.map(item => (
            sectionId === 'videos' ? (
              <VideoCard
                key={item.id}
                item={item}
              />
            ) : (
              <WorkCard
                key={item.id}
                item={item}
                sectionId={sectionId}
              />
            )
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="work">
      <div className="filter-bar">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      {Object.entries(workItems)
        .sort(([a], [b]) => {
          const order = ['press-releases-stories', 'videos', 'narrative-impact', 'earned-media'];
          return order.indexOf(a) - order.indexOf(b);
        })
        .map(([sectionId, items]) => 
          renderSection(
            sectionId, 
            items, 
            ['earned-media', 'features', 'narrative-impact', 'videos'].includes(sectionId)
          )
        )}
    </section>
  );
}

export default Work; 