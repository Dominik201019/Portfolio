# Portfolio — Dominik Druciarek

Gotowa strona HTML/CSS/JavaScript, bez instalowania zależności. Pliki do publikacji znajdują się w `dist`.

## GitHub Pages

Wgraj całą zawartość folderu `dist` do głównego katalogu repozytorium, zachowując folder `assets`. Nie wgrywaj samego `index.html`. W ustawieniach Pages wybierz gałąź `main` i katalog `/ (root)`. Wszystkie ścieżki są względne i działają również pod adresem repozytorium.

## Realizacje

14 projektów: TORQUE, FORMA, Adam Rudzki, MONOLIT, KLISZA, CIAO BELLA!, ROUTE 66, MERIDIAN, AUREA ESTATES, SYGNAŁ, BARBER 99, Anna Radecka / ADRES, FRAME i NEBOSA TOWER. Strona główna zachowuje 2 lata doświadczenia; liczba projektów pochodzi ze wspólnego katalogu `projects.js`.

Katalog `realizacje.html` oferuje wyszukiwanie bez polskich znaków, wybór kilku branż, filtrowanie według funkcji i stylu, łączenie funkcji jako wszystkie/dowolne, sortowanie, siatkę/listę, usuwanie pojedynczych filtrów i kopiowanie widoku. Ustawienia zapisują się w adresie URL. Animacje uwzględniają systemowe ograniczenie ruchu.

`update-catalog.cjs` odtwarza katalog HTML i dane; do zwykłego uruchomienia strony nie jest potrzebny.

## Kontakt e-mail
Formularz w oknie wysyła przez FormSubmit AJAX na druciarekdominik4@gmail.com. Odbiorca musi potwierdzić adres w wiadomości aktywacyjnej FormSubmit po pierwszym zgłoszeniu. E-mail odwiedzającego jest polem odpowiedzi, temat zawiera wybraną kategorię. Wysyłka nie wymaga hasła do Gmaila ani klucza w kodzie strony.

Obsługa: walidacja, blokada podwójnego kliknięcia, stan wysyłania, potwierdzenie przyjęcia przez usługę, błędy bez kasowania formularza i honeypot. Żadne dane nie są zapisywane przez stronę w localStorage. Wiadomości przetwarza zewnętrzna usługa FormSubmit. Dokumentacja: https://formsubmit.co/documentation

Filtry są dostępne w jednym panelu otwieranym przyciskiem Filtruj; wybór branży, funkcji, stylu, kolejności i widoku. Miniatury nowych projektów są zrzutami wskazanych stron GitHub Pages.


NEBOSA TOWER: https://dominik201019.github.io/NebosaTower/ — miniatura jest zrzutem działającej strony GitHub Pages. Najnowszy projekt w katalogu, kategoria Nieruchomości; wyszukiwanie obejmuje m.in. spacer 3D, mieszkania i Wrocław.
