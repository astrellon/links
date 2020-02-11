// Add tooltips from alt attributes on images.
if (typeof(document.querySelectorAll) === 'function')
{
    const backgrounds = document.querySelectorAll('.background');
    const offset = -Math.random() * 60 + 's';
    for (let i = 0; i < backgrounds.length; i++)
    {
        (backgrounds[i] as HTMLElement).style.animationDelay = offset;
    }
}