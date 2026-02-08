// src/components/PDFDocument.jsx
import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
    Font
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 50,
        fontSize: 11,
        fontFamily: 'Times-Roman',
        lineHeight: 1.5,
    },
    // Kop Surat - Logo left, text center
    kopSuratContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingBottom: 10,
        marginBottom: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
    },
    kopLogo: {
        width: 70,
        height: 70,
        objectFit: 'contain',
    },
    kopText: {
        flex: 1,
        textAlign: 'center',
    },
    kopNama: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Times-Bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 4,
    },
    kopAlamat: {
        fontSize: 10,
        marginBottom: 3,
        lineHeight: 1.3,
    },
    kopContact: {
        fontSize: 9,
        color: '#333',
    },
    // Old kop surat image style
    kopSurat: {
        width: '100%',
        marginBottom: 15,
        maxHeight: 100,
        objectFit: 'contain',
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
    },
    headerNoKop: {
        textAlign: 'center',
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'Times-Bold',
    },
    subtitle: {
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: 'Times-Bold',
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        marginBottom: 8,
    },
    table: {
        marginBottom: 15,
    },
    tableRow: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    tableLabel: {
        width: 100,
    },
    tableSeparator: {
        width: 15,
    },
    tableValue: {
        flex: 1,
    },
    recipientBlock: {
        marginBottom: 10,
    },
    recipientTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'Times-Bold',
    },
    pekerjaanTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
        fontFamily: 'Times-Bold',
    },
    pekerjaanList: {
        marginLeft: 20,
    },
    pekerjaanItem: {
        marginBottom: 5,
        flexDirection: 'row',
    },
    pekerjaanNumber: {
        width: 20,
    },
    pekerjaanText: {
        flex: 1,
    },
    closure: {
        marginTop: 15,
        marginBottom: 20,
        textAlign: 'justify',
    },
    signatureSection: {
        marginTop: 30,
    },
    ptName: {
        fontWeight: 'bold',
        fontFamily: 'Times-Bold',
        marginBottom: 5,
    },
    signatureArea: {
        height: 80,
        position: 'relative',
        marginBottom: 10,
    },
    ttdImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 150,
        height: 60,
        objectFit: 'contain',
    },
    stampImage: {
        position: 'absolute',
        top: -10,
        left: 80,
        width: 80,
        height: 80,
        objectFit: 'contain',
        opacity: 0.85,
    },
    signatureLine: {
        borderTopWidth: 1,
        borderTopColor: '#000',
        borderTopStyle: 'solid',
        paddingTop: 5,
        maxWidth: 180,
    },
    signerName: {
        fontWeight: 'bold',
        fontFamily: 'Times-Bold',
    },
    signerTitle: {
        fontSize: 10,
    },
});

// Helper to format date
const formatTanggal = (dateString) => {
    if (!dateString) return '___________';
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const date = new Date(dateString);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

/**
 * PDF Document component for generating real PDF
 * Includes Kop Surat (Letterhead) when enabled
 */
const PDFDocument = ({ formData }) => {
    const penerimaList = Array.isArray(formData.penerima)
        ? formData.penerima
        : formData.penerima ? [formData.penerima] : [];

    const pekerjaanFiltered = formData.pekerjaan.filter(p => p.trim());

    // Get kopSurat data
    const kopSurat = formData.kopSurat || {};

    // Debug log
    console.log('PDF kopSurat data:', kopSurat);
    console.log('PDF kopSurat.enabled:', kopSurat.enabled);

    // Check if kop surat is enabled - simplified condition
    const hasKopSurat = Boolean(kopSurat.enabled);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Kop Surat - New structured format */}
                {hasKopSurat && (
                    <View style={styles.kopSuratContainer}>
                        {kopSurat.logo && (
                            <Image src={kopSurat.logo} style={styles.kopLogo} />
                        )}
                        <View style={styles.kopText}>
                            {kopSurat.namaPerusahaan && (
                                <Text style={styles.kopNama}>{kopSurat.namaPerusahaan}</Text>
                            )}
                            {kopSurat.alamat && (
                                <Text style={styles.kopAlamat}>{kopSurat.alamat}</Text>
                            )}
                            <Text style={styles.kopContact}>
                                {kopSurat.telepon && `Telp: ${kopSurat.telepon}`}
                                {kopSurat.telepon && kopSurat.email && ' | '}
                                {kopSurat.email && `Email: ${kopSurat.email}`}
                                {(kopSurat.telepon || kopSurat.email) && kopSurat.website && ' | '}
                                {kopSurat.website && `Web: ${kopSurat.website}`}
                            </Text>
                        </View>
                    </View>
                )}

                {/* Header */}
                <View style={hasKopSurat ? styles.header : styles.headerNoKop}>
                    <Text style={styles.title}>SURAT PERINTAH KERJA</Text>
                    <Text style={styles.subtitle}>
                        Nomor: {formData.info.nomorSurat || '___________'}
                    </Text>
                </View>

                {/* Penandatangan */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Yang bertanda tangan di bawah ini:</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableLabel}>Nama</Text>
                            <Text style={styles.tableSeparator}>:</Text>
                            <Text style={styles.tableValue}>
                                {formData.penandatangan.nama || '___________'}
                            </Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableLabel}>Jabatan</Text>
                            <Text style={styles.tableSeparator}>:</Text>
                            <Text style={styles.tableValue}>
                                {formData.penandatangan.jabatan || '___________'}
                            </Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableLabel}>Alamat</Text>
                            <Text style={styles.tableSeparator}>:</Text>
                            <Text style={styles.tableValue}>
                                {formData.penandatangan.alamat || '___________'}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Penerima */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Memberikan perintah kerja kepada:</Text>
                    {penerimaList.map((penerima, index) => (
                        <View key={index} style={styles.recipientBlock}>
                            {penerimaList.length > 1 && (
                                <Text style={styles.recipientTitle}>Penerima {index + 1}</Text>
                            )}
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableLabel}>Nama</Text>
                                    <Text style={styles.tableSeparator}>:</Text>
                                    <Text style={styles.tableValue}>
                                        {penerima?.nama || '___________'}
                                    </Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableLabel}>Jabatan</Text>
                                    <Text style={styles.tableSeparator}>:</Text>
                                    <Text style={styles.tableValue}>
                                        {penerima?.jabatan || '___________'}
                                    </Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableLabel}>Alamat</Text>
                                    <Text style={styles.tableSeparator}>:</Text>
                                    <Text style={styles.tableValue}>
                                        {penerima?.alamat || '___________'}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Spesifikasi Pekerjaan */}
                <View style={styles.section}>
                    <Text style={styles.pekerjaanTitle}>Spesifikasi pekerjaan:</Text>
                    <View style={styles.pekerjaanList}>
                        {pekerjaanFiltered.length > 0 ? (
                            pekerjaanFiltered.map((item, index) => (
                                <View key={index} style={styles.pekerjaanItem}>
                                    <Text style={styles.pekerjaanNumber}>{index + 1}.</Text>
                                    <Text style={styles.pekerjaanText}>{item}</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={{ color: '#999' }}>Belum ada spesifikasi pekerjaan</Text>
                        )}
                    </View>
                </View>

                {/* Closure */}
                <Text style={styles.closure}>
                    Demikian surat perintah kerja ini dibuat agar dapat dilaksanakan dengan
                    sebaik-baiknya. Atas kerjasamanya kami ucapkan terima kasih.
                </Text>

                {/* Place and Date */}
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Dikeluarkan di</Text>
                        <Text style={styles.tableSeparator}>:</Text>
                        <Text style={styles.tableValue}>
                            {formData.info.tempat || '___________'}
                        </Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Pada tanggal</Text>
                        <Text style={styles.tableSeparator}>:</Text>
                        <Text style={styles.tableValue}>
                            {formatTanggal(formData.info.tanggal)}
                        </Text>
                    </View>
                </View>

                {/* Signature */}
                <View style={styles.signatureSection}>
                    <Text style={styles.ptName}>
                        {formData.info.namaPT || '___________'}
                    </Text>
                    <View style={styles.signatureArea}>
                        {formData.info.ttd && (
                            <Image src={formData.info.ttd} style={styles.ttdImage} />
                        )}
                        {formData.info.stempel && (
                            <Image src={formData.info.stempel} style={styles.stampImage} />
                        )}
                    </View>
                    <View style={styles.signatureLine}>
                        <Text style={styles.signerName}>
                            {formData.penandatangan.nama || '___________'}
                        </Text>
                        <Text style={styles.signerTitle}>
                            {formData.penandatangan.jabatan || '___________'}
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;
