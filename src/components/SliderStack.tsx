import InfiniteSlider from './smoothui/infinite-slider';
import { stack } from '@/data/Stack';

export default function SliderStack() {
  return (
    <div className="w-full border border-(--color-border) bg-(--color-surface)">
      <InfiniteSlider className="py-6" gap={100} speed={80}>
        {stack.map((technology, index) => (
          <div className="flex items-center gap-20" key={index}>
            <span className="font-display text-5xl text-(--color-text)">{technology}</span>
            <span className="grid place-content-center">
              <div className="h-1 w-1 rounded-full bg-violet-500"></div>
            </span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
