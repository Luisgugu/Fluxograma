class Flowchart {
    constructor(svgId) {
        this.svg = document.getElementById(svgId);
        this.data = flowchartData;
        this.init();
    }

    init() {
        this.drawArrows();
        this.drawConnections();
        this.drawNodes();
        this.attachEventListeners();
    }

    drawArrows() {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        
        marker.setAttribute('id', 'arrowhead');
        marker.setAttribute('markerWidth', '10');
        marker.setAttribute('markerHeight', '10');
        marker.setAttribute('refX', '9');
        marker.setAttribute('refY', '3');
        marker.setAttribute('orient', 'auto');
        
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', '0 0, 10 3, 0 6');
        polygon.setAttribute('fill', '#667eea');
        
        marker.appendChild(polygon);
        defs.appendChild(marker);
        this.svg.appendChild(defs);
    }

    drawConnections() {
        this.data.connections.forEach(conn => {
            const fromNode = this.data.nodes.find(n => n.id === conn.from);
            const toNode = this.data.nodes.find(n => n.id === conn.to);
            
            if (fromNode && toNode) {
                const x1 = fromNode.x;
                const y1 = fromNode.y + fromNode.height / 2;
                const x2 = toNode.x;
                const y2 = toNode.y - toNode.height / 2;
                
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);
                line.setAttribute('class', 'arrow');
                
                this.svg.appendChild(line);
            }
        });
    }

    drawNodes() {
        this.data.nodes.forEach(node => {
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.setAttribute('class', `flowchart-node node-${node.type}`);
            group.setAttribute('data-id', node.id);
            group.setAttribute('transform', `translate(${node.x - node.width / 2}, ${node.y - node.height / 2})`);
            
            // Desenhar retângulo
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('width', node.width);
            rect.setAttribute('height', node.height);
            rect.setAttribute('rx', '10');
            rect.setAttribute('ry', '10');
            
            // Desenhar texto
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', node.width / 2);
            text.setAttribute('y', node.height / 2);
            text.setAttribute('dominant-baseline', 'middle');
            text.setAttribute('text-anchor', 'middle');
            
            const lines = node.label.split('\n');
            if (lines.length === 1) {
                text.textContent = node.label;
            } else {
                lines.forEach((line, index) => {
                    const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                    tspan.setAttribute('x', node.width / 2);
                    tspan.setAttribute('dy', index === 0 ? '-0.6em' : '1.2em');
                    tspan.textContent = line;
                    text.appendChild(tspan);
                });
            }
            
            group.appendChild(rect);
            group.appendChild(text);
            this.svg.appendChild(group);
        });
    }

    attachEventListeners() {
        const nodes = this.svg.querySelectorAll('.flowchart-node');
        const infoPanel = document.getElementById('nodeInfo');
        
        nodes.forEach(node => {
            node.addEventListener('click', (e) => {
                nodes.forEach(n => n.style.opacity = '0.6');
                node.style.opacity = '1';
                
                const nodeId = parseInt(node.getAttribute('data-id'));
                const nodeData = this.data.nodes.find(n => n.id === nodeId);
                
                this.showInfo(nodeData, infoPanel);
            });
            
            node.addEventListener('mouseenter', () => {
                node.style.filter = 'brightness(1.2)';
            });
            
            node.addEventListener('mouseleave', () => {
                node.style.filter = 'brightness(1)';
            });
        });

        // Clique inicial no primeiro nó
        const firstNode = nodes[0];
        if (firstNode) {
            firstNode.click();
        }
    }

    showInfo(nodeData, container) {
        let html = `<h3>${nodeData.info.title}</h3>`;
        html += `<p>${nodeData.info.description}</p>`;
        
        if (nodeData.info.details) {
            html += '<ul>';
            nodeData.info.details.forEach(detail => {
                html += `<li>${detail}</li>`;
            });
            html += '</ul>';
        }
        
        container.innerHTML = html;
    }
}

// Inicializar fluxograma quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new Flowchart('flowchart');
});