# Data Model: React Interface Conversion

**Date**: 2025-10-28
**Feature**: React Interface Conversion
**Status**: Complete

## Overview

This data model defines the entities and relationships for React components that will be converted from the existing Jekyll academic website interface. The model focuses on component state, user interactions, and integration points while maintaining compatibility with existing Jekyll data structures.

## Core Entities

### 1. InterfaceComponent

Represents a UI component that will be converted to React.

```typescript
interface InterfaceComponent {
  id: string;                    // Unique component identifier
  name: string;                  // Component display name
  type: ComponentType;           // Component category
  status: ConversionStatus;      // Current conversion status
  priority: Priority;            // Conversion priority
  jekyllSource: JekyllSource;    // Original Jekyll template/include
  reactImplementation: ReactImplementation; // React component details
  dependencies: string[];        // Component dependencies
  testCoverage: number;          // Test coverage percentage
}
```

**Component Types**:
```typescript
enum ComponentType {
  NAVIGATION = 'navigation',
  AUTHOR_PROFILE = 'author_profile',
  PUBLICATION_LIST = 'publication_list',
  THEME_TOGGLE = 'theme_toggle',
  CITATION_MANAGER = 'citation_manager',
  SEARCH = 'search',
  FORM = 'form',
  LAYOUT = 'layout'
}
```

### 2. ComponentState

Represents the state management requirements for React components.

```typescript
interface ComponentState {
  componentId: string;
  stateType: StateType;
  initialState: any;
  persistence: PersistenceStrategy;
  validation: ValidationRule[];
}
```

**State Types**:
```typescript
enum StateType {
  LOCAL = 'local',           // Component internal state
  GLOBAL = 'global',         // Shared across components
  SERVER = 'server',         // From API/external source
  PERSISTENT = 'persistent'  // Stored in localStorage
}
```

### 3. UserInteraction

Represents user actions and interactions with components.

```typescript
interface UserInteraction {
  id: string;
  componentId: string;
  interactionType: InteractionType;
  trigger: TriggerType;
  expectedOutcome: ExpectedOutcome;
  accessibility: AccessibilityRequirement;
  performance: PerformanceRequirement;
}
```

**Interaction Types**:
```typescript
enum InteractionType {
  CLICK = 'click',
  FORM_SUBMIT = 'form_submit',
  TOGGLE = 'toggle',
  SEARCH = 'search',
  FILTER = 'filter',
  SORT = 'sort',
  NAVIGATE = 'navigate',
  KEYBOARD = 'keyboard'
}
```

### 4. IntegrationPoint

Represents connections between React components and external systems.

```typescript
interface IntegrationPoint {
  id: string;
  type: IntegrationType;
  source: DataSource;
  target: TargetSystem;
  dataFormat: DataFormat;
  authentication: AuthenticationType;
  errorHandling: ErrorHandlingStrategy;
}
```

**Integration Types**:
```typescript
enum IntegrationType {
  JEKYLL_DATA = 'jekyll_data',     // Jekyll _data files
  API_FETCH = 'api_fetch',         // External API calls
  LOCAL_STORAGE = 'local_storage', // Browser localStorage
  THEME_SYSTEM = 'theme_system',   // Theme management
  SEARCH_INDEX = 'search_index'    // Site search functionality
}
```

## Component-Specific Data Models

### PublicationList Component

```typescript
interface PublicationListState {
  publications: Publication[];
  filters: PublicationFilters;
  sortBy: SortOption;
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
}

interface PublicationFilters {
  category: string[];
  year: string[];
  author: string[];
  venue: string[];
}

interface Publication {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  date: string;
  category: PublicationCategory;
  excerpt: string;
  url: string;
  pdfUrl?: string;
  doi?: string;
  citationCount?: number;
}
```

### ThemeToggle Component

```typescript
interface ThemeState {
  currentTheme: Theme;
  systemPreference: Theme;
  isTransitioning: boolean;
}

interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
  fonts: ThemeFonts;
  spacing: ThemeSpacing;
}

type Theme = 'light' | 'dark' | 'system';
```

### AuthorProfile Component

```typescript
interface AuthorProfileState {
  author: Author;
  isExpanded: boolean;
  socialLinks: SocialLink[];
  interests: string[];
  currentStatus: string;
}

interface Author {
  name: string;
  title: string;
  affiliation: string;
  avatar: string;
  bio: string;
  email: string;
  website: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  isVisible: boolean;
}
```

### CitationManager Component

```typescript
interface CitationManagerState {
  publications: Publication[];
  selectedCitations: string[];
  exportFormat: CitationFormat;
  isLoading: boolean;
  error: string | null;
}

interface CitationData {
  id: string;
  apa: string;
  mla: string;
  chicago: string;
  bibtex: string;
  ris: string;
  endnote: string;
}

type CitationFormat = 'apa' | 'mla' | 'chicago' | 'bibtex' | 'ris' | 'endnote';
```

## Validation Rules

### Component Validation

```typescript
interface ValidationRule {
  field: string;
  rule: ValidationType;
  required: boolean;
  message: string;
}

enum ValidationType {
  REQUIRED = 'required',
  MIN_LENGTH = 'min_length',
  MAX_LENGTH = 'max_length',
  EMAIL = 'email',
  URL = 'url',
  REGEX = 'regex'
}
```

### Accessibility Requirements

```typescript
interface AccessibilityRequirement {
  wcagLevel: WCAGLevel;
  keyboardNavigation: boolean;
  screenReaderSupport: boolean;
  colorContrast: boolean;
  focusManagement: boolean;
  ariaLabels: boolean;
}

enum WCAGLevel {
  AA = 'AA',
  AAA = 'AAA'
}
```

## Performance Requirements

```typescript
interface PerformanceRequirement {
  maxLoadTime: number;        // Maximum load time in ms
  maxBundleSize: number;      // Maximum bundle size in KB
  maxMemoryUsage: number;     // Maximum memory usage in MB
  minFirstContentfulPaint: number; // First Contentful Paint time
  minLargestContentfulPaint: number; // Largest Contentful Paint time
}
```

## Data Relationships

```
InterfaceComponent
├── manages (1..n) ComponentState
├── supports (1..n) UserInteraction
└── connects (1..n) IntegrationPoint

ComponentState
└── validates (1..n) ValidationRule

UserInteraction
├── requires (1..1) AccessibilityRequirement
└── measures (1..1) PerformanceRequirement

IntegrationPoint
└── pulls_from (1..1) DataSource

PublicationListState
└── contains (1..n) Publication

AuthorProfileState
└── displays (1..1) Author

CitationManagerState
└── manages (1..n) CitationData
```

## State Management Patterns

### Local State Management

For component-specific state that doesn't need to be shared:

```typescript
const [localState, setLocalState] = useState<LocalStateType>(initialState);
```

### Global State Management

For state shared across components (theme, user preferences):

```typescript
interface GlobalState {
  theme: ThemeState;
  userPreferences: UserPreferences;
  notifications: Notification[];
}

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within GlobalStateProvider');
  }
  return context;
};
```

### Server State Management

For data from APIs (OpenAlex citations, etc.):

```typescript
const useCitationData = (publicationId: string) => {
  return useQuery({
    queryKey: ['citation', publicationId],
    queryFn: () => fetchCitationCount(publicationId),
    staleTime: 1000 * 60 * 60, // 1 hour
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
```

## Data Migration Strategy

### Phase 1: Data Mapping

1. Map Jekyll data structures to React component props
2. Identify state transitions from jQuery-based to React-based
3. Create compatibility layers for smooth migration

### Phase 2: State Transfer

1. localStorage migration for user preferences
2. URL state preservation for navigation and filters
3. Form state recovery during component replacement

### Phase 3: Data Validation

1. Schema validation for data integrity
2. Type checking with TypeScript
3. Runtime validation for user inputs

## Testing Data Requirements

### Unit Test Data

```typescript
interface TestData {
  publications: Publication[];
  author: Author;
  themes: Theme[];
  userInteractions: UserInteraction[];
}
```

### Integration Test Data

```typescript
interface IntegrationTestData {
  jekyllData: any;           // Mock Jekyll _data
  apiResponses: any[];       // Mock API responses
  localStorageData: any;     // Mock localStorage
}
```

## Security Considerations

### Data Sanitization

- User input sanitization for search and form fields
- XSS prevention in dynamic content rendering
- URL validation for external links

### Privacy Protection

- Minimal data collection for analytics
- Secure localStorage usage
- No personal data in component state

## Scalability Requirements

### Data Volume Handling

- Support for 100+ publications without performance degradation
- Efficient filtering and sorting algorithms
- Pagination for large datasets

### Component Reusability

- Generic component interfaces for different content types
- Configurable component behavior
- Theme-independent styling approach

This data model provides a comprehensive foundation for implementing React components that maintain functionality while improving maintainability and user experience.