import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export interface FilterState {
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  showNew: boolean;
  showBestsellers: boolean;
  showFlutterCon: boolean;
}

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableSizes: string[];
  availableColors: { name: string; hex: string }[];
  maxPrice: number;
}

const ProductFilters = ({
  filters,
  onFilterChange,
  availableSizes,
  availableColors,
  maxPrice,
}: ProductFiltersProps) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleSizeToggle = (size: string) => {
    const newSizes = localFilters.sizes.includes(size)
      ? localFilters.sizes.filter((s) => s !== size)
      : [...localFilters.sizes, size];
    const newFilters = { ...localFilters, sizes: newSizes };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleColorToggle = (color: string) => {
    const newColors = localFilters.colors.includes(color)
      ? localFilters.colors.filter((c) => c !== color)
      : [...localFilters.colors, color];
    const newFilters = { ...localFilters, colors: newColors };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...localFilters, priceRange: [value[0], value[1]] as [number, number] };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCheckboxChange = (key: 'showNew' | 'showBestsellers' | 'showFlutterCon') => {
    const newFilters = { ...localFilters, [key]: !localFilters[key] };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters: FilterState = {
      sizes: [],
      colors: [],
      priceRange: [0, maxPrice],
      showNew: false,
      showBestsellers: false,
      showFlutterCon: false,
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const activeFilterCount =
    localFilters.sizes.length +
    localFilters.colors.length +
    (localFilters.priceRange[0] > 0 || localFilters.priceRange[1] < maxPrice ? 1 : 0) +
    (localFilters.showNew ? 1 : 0) +
    (localFilters.showBestsellers ? 1 : 0) +
    (localFilters.showFlutterCon ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Quick Filters */}
      <div>
        <h4 className="font-heading font-semibold text-foreground mb-3">Quick Filters</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox
              id="showNew"
              checked={localFilters.showNew}
              onCheckedChange={() => handleCheckboxChange('showNew')}
            />
            <Label htmlFor="showNew" className="text-sm cursor-pointer">New Arrivals</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="showBestsellers"
              checked={localFilters.showBestsellers}
              onCheckedChange={() => handleCheckboxChange('showBestsellers')}
            />
            <Label htmlFor="showBestsellers" className="text-sm cursor-pointer">Bestsellers</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="showFlutterCon"
              checked={localFilters.showFlutterCon}
              onCheckedChange={() => handleCheckboxChange('showFlutterCon')}
            />
            <Label htmlFor="showFlutterCon" className="text-sm cursor-pointer">FlutterCon Exclusive</Label>
          </div>
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h4 className="font-heading font-semibold text-foreground mb-3">Size</h4>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
                localFilters.sizes.includes(size)
                  ? 'bg-primary text-primary-foreground shadow-flutter'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h4 className="font-heading font-semibold text-foreground mb-3">Color</h4>
        <div className="flex flex-wrap gap-3">
          {availableColors.map((color) => (
            <button
              key={color.hex}
              onClick={() => handleColorToggle(color.name)}
              className={cn(
                'w-8 h-8 rounded-full border-2 transition-all duration-200 shadow-sm',
                localFilters.colors.includes(color.name)
                  ? 'border-primary ring-2 ring-primary/30 scale-110'
                  : 'border-border hover:scale-110'
              )}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-heading font-semibold text-foreground mb-3">Price Range</h4>
        <Slider
          value={[localFilters.priceRange[0], localFilters.priceRange[1]]}
          onValueChange={handlePriceChange}
          max={maxPrice}
          step={100}
          className="mb-3"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>₹{localFilters.priceRange[0].toLocaleString()}</span>
          <span>₹{localFilters.priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Clear Filters */}
      {activeFilterCount > 0 && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full"
        >
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <div className="flutter-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Filters
            </h3>
            {activeFilterCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle className="font-heading flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                Filters
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ProductFilters;
