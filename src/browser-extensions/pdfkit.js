import PDFDocument from '@foliojs-fork/pdfkit';
import fs from 'fs'
import HelveticaBold from '!!raw-loader!@foliojs-fork/pdfkit/js/data/Helvetica-Bold.afm';
import HelveticaBoldOblique from '!!raw-loader!@foliojs-fork/pdfkit/js/data/Helvetica-BoldOblique.afm';
import HelveticaOblique from '!!raw-loader!@foliojs-fork/pdfkit/js/data/Helvetica-Oblique.afm';
import Helvetica from '!!raw-loader!@foliojs-fork/pdfkit/js/data/Helvetica.afm';

// register files imported directly
fs.writeFileSync('data/Helvetica-Bold.afm', HelveticaBold);
fs.writeFileSync('data/Helvetica-BoldOblique.afm', HelveticaBoldOblique);
fs.writeFileSync('data/Helvetica-Oblique.afm', HelveticaOblique);
fs.writeFileSync('data/Helvetica.afm', Helvetica);

export default PDFDocument;