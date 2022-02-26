
export function createFirework(x: number, y: number, duration: number, size: number, range: number, colors: Array<string>, randomColor: boolean
) {
    const fw = document.createElement("div");
    fw.style.width = `${size}px`;
    fw.style.height = `${size}px`;
    fw.style.borderRadius = '50%';
    fw.style.position = 'absolute';
    fw.style.zIndex = '9999';
    fw.style.top = `${y}px`;
    fw.style.left = `${x}px`;
    fw.style.transform = "translate(-50%, -50%)";
    const bgColor = randomColor ? `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}` :
        colors[Math.floor(Math.random() * colors.length)];

    fw.style.backgroundColor = bgColor;

    const animation = fw.animate([{
        opacity: 0,
        transform: `translate(${(Math.random() - 0.5) * range}px, ${(Math.random() - 0.5) * range
            }px)`,
        width: 0,
        height: 0
    }],
        duration
    );

    animation.finished.then(() => fw.remove());

    document.body.appendChild(fw);
}

