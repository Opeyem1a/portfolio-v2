/**
 * Text that resolves letter by letter when it mounts. Each letter is its own
 * inline-block (so it can animate), grouped into words so lines still break
 * between words. Screen readers get the plain text via aria-label.
 */
function SplitReveal({
    text,
    stagger = 18,
}: {
    text: string;
    stagger?: number;
}) {
    let i = 0;
    return (
        <span
            aria-label={text}
            style={{ ['--stagger' as string]: `${stagger}ms` }}
        >
            {text.split(' ').map((word, w) => (
                <span key={w}>
                    {w > 0 && ' '}
                    <span
                        aria-hidden="true"
                        className="inline-block whitespace-nowrap"
                    >
                        {[...word].map((char, c) => (
                            <span
                                key={c}
                                className="reveal-char"
                                style={{ ['--i' as string]: i++ }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                </span>
            ))}
        </span>
    );
}

export default SplitReveal;
