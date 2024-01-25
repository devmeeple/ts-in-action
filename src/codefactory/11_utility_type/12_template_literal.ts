/**
 * Template Literal
 */
type Meeple = 'Meeple';

// Uppercase
type MeepleUpper = Uppercase<Meeple>;

// Lowercase
type MeepleLower = Lowercase<MeepleUpper>;

// Capitalize: 첫번째 글자만 대문자
type MeepleCapital = Capitalize<MeepleLower>;

// Uncapitalize
type MeepleUnCapital = Uncapitalize<MeepleCapital>;
