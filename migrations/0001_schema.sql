CREATE TABLE IF NOT EXISTS recipes (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,
  slug              TEXT UNIQUE NOT NULL,
  version           INTEGER NOT NULL DEFAULT 1,
  title             TEXT NOT NULL,
  category          TEXT NOT NULL,
  description       TEXT NOT NULL,
  hero_image_url    TEXT NOT NULL,
  meta_title        TEXT NOT NULL,
  meta_description  TEXT NOT NULL,
  keywords          TEXT NOT NULL,
  ingredients       TEXT NOT NULL,
  steps             TEXT NOT NULL,
  nutrition         TEXT NOT NULL,
  tips              TEXT NOT NULL,
  youtube_query     TEXT NOT NULL,
  youtube_video_id  TEXT,
  prep_time         TEXT,
  cook_time         TEXT,
  total_time        TEXT,
  difficulty        TEXT,
  servings          TEXT,
  related_recipes   TEXT DEFAULT '[]',
  schema_markup     TEXT,
  published         INTEGER DEFAULT 0,
  created_at        TEXT DEFAULT (datetime('now')),
  updated_at        TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_recipes_slug      ON recipes(slug);
CREATE INDEX IF NOT EXISTS idx_recipes_category  ON recipes(category);
CREATE INDEX IF NOT EXISTS idx_recipes_published ON recipes(published);
