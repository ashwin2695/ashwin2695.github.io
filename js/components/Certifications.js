// Certifications Component - Banner at top
export function renderCertifications(certifications) {
    const banner = document.getElementById('certificationsBanner');
    
    const html = `
        <div class="container">
            <div class="banner-title">
                <i class="fas fa-certificate"></i>
                <span>Certifications</span>
            </div>
            <div class="certifications-scroll">
                <div class="certifications-horizontal">
                    ${certifications.map(cert => `
                        <div class="cert-badge" title="${cert.issuer ? cert.issuer + ' - ' : ''}${cert.date || ''}">
                            <i class="fas ${cert.icon || 'fa-certificate'}"></i>
                            <span class="cert-name">${cert.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    banner.innerHTML = html;
}
